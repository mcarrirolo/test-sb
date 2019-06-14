/**
 * 
 */
package controller;

import java.util.ArrayList;
import java.util.Map;
import java.util.Vector;

import jade.content.lang.sl.SLCodec;
import jade.core.AID;
import jade.core.Agent;
import jade.core.ContainerID;
import jade.core.behaviours.CyclicBehaviour;
import jade.domain.AMSService;
import jade.domain.FIPAException;
import jade.domain.FIPANames;
import jade.domain.FIPAAgentManagement.AMSAgentDescription;
import jade.domain.FIPAAgentManagement.SearchConstraints;
import jade.domain.introspection.AMSSubscriber;
import jade.domain.introspection.AddedContainer;
import jade.domain.introspection.BornAgent;
import jade.domain.introspection.DeadAgent;
import jade.domain.introspection.Event;
import jade.domain.introspection.IntrospectionVocabulary;
import jade.domain.introspection.RemovedContainer;
import jade.lang.acl.ACLMessage;
import jade.lang.acl.MessageTemplate;
import jade.proto.SimpleAchieveREInitiator;
import jade.tools.ToolAgent;
import jade.wrapper.ControllerException;

/**
 * @author Dr. Jacopo Pellegrino Questa classe estende Agent ed è un esempio di
 *         agente in grado di ricevere ed inviare messaggi. Gli agenti agiscono
 *         tramite i behaiors che possono essere di vari tipi.
 */
public class TestAgent extends ToolAgent implements ITestAgent {

    static int snifferCounter = 0;
    static int dummyCounter = 0;
    static int logCounter = 0;
    static int introspectorCounter = 0;

    /*
     * Il setup è il primo metodo ad essere eseguito quando l'agente viene creato.
     * Quindi è il posto adatto per eventuali inizializzazioni e per la definizione
     * dei behavior fondamentali
     * 
     * Estendendo la classe ToolAgent: setup() -> toolSetup()
     * 
     */
    @Override
    protected void toolSetup() {

        // Serve per ricevere notifica degli eventi da parte di AMS
        AMSSubscriber subscriber = new AMSSubscriber(){
            protected void installHandlers(Map handlers){
            }
        };
        addBehaviour(subscriber);

        
        // super.setup();
        System.out.println(this.getLocalName() + " was born");

        registerO2AInterface(ITestAgent.class, this);
        getContentManager().registerLanguage(new SLCodec(), FIPANames.ContentLanguage.FIPA_SL0);
        // getContentManager().registerOntology(EventOntology.getInstance());

        // In questo caso aggiungo un CyclicBehaviour (cioè un behavior che,
        // semplificando, viene eseguito in continuazione)
        addBehaviour(new CyclicBehaviour() {

            EventHandler Eh = new EventHandler(){
            public void handle(Event ev) {
                DeadAgent da = (DeadAgent)ev;
                ContainerID cid = da.getWhere();
                // ContainerID is null in case of foreign agents registered with the local AMS or virtual agents
                if (cid != null) {
                    String container = cid.getName();
                    AID agent = da.getAgent();
                    System.out.println("\"\n" + "\"\n" + container + agent.toString() +  "\"\n" + "\"\n");
                    // myGUI.removeAgent(container, agent);
                }
            }};
            MessageTemplate tmpl = MessageTemplate.MatchPerformative(ACLMessage.INFORM);



            // FIXME: quando è lui a richiedere l'esecuzione di un comando
            // non è in grado di ricevere il messaggio proveniente da AMSSubscriber
            //
            // il metodo action di CyclicBehaviour indica quale logica viene eseguita
            // nello specifico l'agente controlla la coda di messaggi e se trova un
            // messaggio lo stampa e risponde
            @Override
            public void action() {

                ACLMessage msg = myAgent.receive(tmpl);
                if (msg != null) {
                    System.out.println(myAgent.getLocalName() + " received\n" + msg);

                    parse(msg);

                    // Come creare un messaggio in generale
                    // creando il messaggio si passa come argomento una performativa che indica lo
                    // scopo della comunicazione
                    ACLMessage reply = new ACLMessage(ACLMessage.INFORM);
                    // si aggiunge un AID come receiver. L'AID indica l'indirizzo del destinatario,
                    // getAMS() restituisce quello di AMS
                    reply.addReceiver(msg.getSender());
                    // L'ontologia descrive e contestualizza il messaggio
                    reply.setOntology("");
                    // Definisce il contenuto, nella variante setContentObject prende come argomento
                    // un oggetto serializable
                    reply.setContent("");
                    // Invia il messaggio
                    send(reply);

                    // C'è un modo più rapido per rispondere ad un messaggio
                    // questo sistema già receiver ontology e conversation id se serve, poi per il
                    // resto è uguale.
                    // ACLMessage quickReply = msg.createReply();

                }
            }
        });
    }


    private Vector<String[]> changedAgents = new Vector<String[]>();
    // Il parser determina il contenuto del messaggio ricevuto tramite l'AMSSubscriber
    // tiene dunque conto della creazione/distruzione degli ultimi agenti in un vector
    private void parse(ACLMessage msg){
        String[] lastAgent = new String[4]; // name, container, addedd/removed, ip
        String content = msg.getContent();
        if(content.contains("occurred")){
            if(content.contains("born-agent")){
                Integer i = 0;
                Integer n = content.indexOf(":name") + 6;
                String name = "";
                String container = "";
                while(i!=2){
                    name = name + content.charAt(n);
                    n++;
                    if(content.charAt(n+1) == ':' || content.charAt(n) == ')'){
                        i++;
                    }
                }
                i = 0;
                n = content.indexOf("container-ID :name") + 19;
                while(i!=1){
                    container = container + content.charAt(n);
                    n++;
                    if(content.charAt(n+1) == ':'){
                        i++;
                    }
                }
                lastAgent[0] = name;
                lastAgent[1] = container;
                lastAgent[2] = "addedd";
                lastAgent[3] = "";
                changedAgents.addElement(lastAgent);
            }
            else if(content.contains("dead-agent")){
                Integer i = 0;
                Integer n = content.indexOf(":name") + 6;
                String name = "";
                String container = "";
                while(i!=2){
                    name = name + content.charAt(n);
                    n++;
                    if(content.charAt(n+1) == ':' || content.charAt(n) == ')'){
                        i++;
                    }
                }
                i = 0;
                n = content.indexOf("container-ID :name") + 19;
                while(i!=1){
                    container = container + content.charAt(n);
                    n++;
                    if(content.charAt(n+1) == ':'){
                        i++;
                    }
                }
                lastAgent[0] = name;
                lastAgent[1] = container;
                lastAgent[2] = "removed";
                lastAgent[3] = "";
                changedAgents.addElement(lastAgent);
            }
            else if(content.contains("added-container")){
                Integer i = 0;
                Integer n = content.indexOf("container-ID :name") + 19;
                String name = null;
                String container = "";
                String ip = "";
                while(i!=1){
                    container = container + content.charAt(n);
                    n++;
                    if(content.charAt(n+1) == ':'){
                        i++;
                    }
                }
                n = n + 11;
                i = 0;
                while(i!=1){
                    ip = ip + content.charAt(n);
                    n++;
                    if(content.charAt(n+1) == '"'){
                        i++;
                    }
                }
                lastAgent[0] = name;
                lastAgent[1] = container;
                lastAgent[2] = "addedd";
                lastAgent[3] = ip;
                changedAgents.addElement(lastAgent);
            }
        }

    }

    public String platformNameRequest() {
        return getContainerController().getName();
    }

    public String containerNameRequest() {
        try {
            return getContainerController().getContainerName();
        } catch (ControllerException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return "not working";
        }
    }

    public String[] agentsNameRequest() {

        // FIXME: Only able to retrive all the agents, not the ones of a precise container
        AMSAgentDescription[] agents = null;
        SearchConstraints c = new SearchConstraints();
        c.setMaxResults(new Long(-1));
        try {
            agents = AMSService.search(this, new AMSAgentDescription(), c);
        } catch (FIPAException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        String agentsNames[] = new String[agents.length];
        for (int i=0; i<agents.length;i++){
            AID agentID = agents[i].getName();
            agentsNames[i] = agentID.getName();
            // System.out.println(agentID.getLocalName());
        }
        return agentsNames;
    }

    public void sendNewAgentRequest(String name, String clas, String args, String owner, String container) {
        if (name == null || clas == null || container == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (create-agent :agent-name " + name + " :class-name " + clas
                    + " :arguments (sequence " + args + ")  :container (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP))))");
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Agent " + name + " has been crated");
        }
    }

    public void killRequest(String name) {
        if (name == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (kill-agent :agent (agent-identifier :name " + name + "))))");
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Agent " + name + " killed");
        }
    }

    public void suspendRequest(String name) {
        if (name == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (modify (ams-agent-description  :name (agent-identifier :name " + name + ") :state suspended))))");
            req.setOntology("FIPA-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Agent " + name + " suspended");
        }
    }

    public void resumeRequest(String name) {
        if (name == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (modify (ams-agent-description  :name (agent-identifier :name " + name + ") :state active))))");
            req.setOntology("FIPA-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Agent " + name + " resumed");
        }
    }

    public void cloneRequest(String name, String container, String newname) {
        if (name == null || container == null || newname == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (clone-agent :mobile-agent-description (mobile-agent-description :name (agent-identifier :name " + name 
                    + ") :destination (container-ID :name " + container + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP)) :new-name " + newname + ")))");
            req.setOntology("jade-mobility-ontology");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Agent " + name + " cloned in " + newname);
        }
    }

    public void migrateRequest(String name, String container) {
        if (name == null || container == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (move-agent :mobile-agent-description (mobile-agent-description :name (agent-identifier :name " + name 
                    + ") :destination (container-ID :name " + container + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP)))))");
            req.setOntology("jade-mobility-ontology");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Agent " + name + " migrated");
        }
    }

    public void freezeRequest(String name) {
        if (name == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (freeze-agent :agent (agent-identifier :name " + name + ") :repository JADE-DB)))");
            req.setOntology("JADE-Persistence");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Agent " + name + " froze");
        }
    }

    public void thawRequest(String name, String container) {
        if (name == null || container == null){
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (thaw-agent :agent (agent-identifier :name " + name 
                    + ") :repository JADE-DB :new-container (container-ID :name " + container + " :protocol JADE-IMTP :address \"<Unknown Host>\"))))");
            req.setOntology("JADE-Persistence");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Agent " + name + " thawed");
        }
    }

    public void saveRequest(String name) {
        if (name == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (save-agent :agent (agent-identifier :name " + name + ") :repository JADE-DB)))");
            req.setOntology("JADE-Persistence");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Agent " + name + " saved");
        }
    }

    public void snifferRequest(String container) {
        snifferCounter++;
        if (container == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (create-agent :agent-name sniffer" + snifferCounter + " :class-name jade.tools.sniffer.Sniffer :container (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP))))");
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Sniffer agent " + snifferCounter + " started on container " + container);
        }
        // l'evento subscribe successivo alla richiesta di creazione dell'agente sniffer, viene eseguito automaticamente
        // pertanto non è necessario implementarlo qui
    }

    public void dummyRequest(String container) {
        dummyCounter++;
        if (container == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (create-agent :agent-name da" + dummyCounter + " :class-name jade.tools.DummyAgent.DummyAgent :container (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP))))");
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Dummy agent " + dummyCounter + " started on container " + container);
        }
        // l'evento subscribe successivo alla richiesta di creazione dell'agente dummy, viene eseguito automaticamente
        // pertanto non è necessario implementarlo qui
    }

    public void logRequest(String container) {
        logCounter++;
        if (container == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (create-agent :agent-name log" + logCounter + " :class-name jade.tools.logging.LogManagerAgent :container (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP))))");
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Log agent " + logCounter + " started on container " + container);
        }
        // l'evento subscribe successivo alla richiesta di creazione dell'agente log, viene eseguito automaticamente
        // pertanto non è necessario implementarlo qui
    }

    public void introspectorRequest(String container) {
        introspectorCounter++;
        if (container == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (create-agent :agent-name introspector" + introspectorCounter + " :class-name jade.tools.introspector.Introspector  :container (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP))))");
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Introspector agent " + introspectorCounter + " started on container " + container);
        }
        // l'evento subscribe successivo alla richiesta di creazione dell'agente introspector, viene eseguito automaticamente
        // pertanto non è necessario implementarlo qui
    }
    
    public String[] updateRequest(){
        String[] lastAgent = new String[4]; // name, container, addedd/removed, ip
        if(changedAgents.size() != 0){
            lastAgent = changedAgents.remove(changedAgents.size()-1);
        }
        else{
            lastAgent[0] = "";
            lastAgent[1] = "";
            lastAgent[2] = "";
            lastAgent[3] = "";
        }
        // System.out.println(lastAgent[0]+lastAgent[1]+lastAgent[2]+lastAgent[3]);
        return lastAgent;
    }
	
}
