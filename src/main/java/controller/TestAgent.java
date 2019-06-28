/**
 * 
 */
package controller;

import java.util.Iterator;
import java.util.Map;
import java.util.Vector;

import jade.content.lang.sl.SLCodec;
import jade.core.AID;
import jade.core.BehaviourID;
import jade.core.ContainerID;
import jade.core.behaviours.CyclicBehaviour;
import jade.domain.AMSService;
import jade.domain.DFService;
import jade.domain.FIPAException;
import jade.domain.FIPANames;
import jade.domain.FIPAAgentManagement.AMSAgentDescription;
import jade.domain.FIPAAgentManagement.DFAgentDescription;
import jade.domain.FIPAAgentManagement.SearchConstraints;
import jade.domain.FIPAAgentManagement.ServiceDescription;
import jade.domain.introspection.AMSSubscriber;
import jade.domain.introspection.DeadAgent;
import jade.domain.introspection.Event;
import jade.lang.acl.ACLMessage;
import jade.lang.acl.MessageTemplate;
import jade.tools.ToolAgent;
import jade.wrapper.ControllerException;

/**
 * @author Dr. Jacopo Pellegrino Questa classe estende Agent ed è un esempio di
 *         agente in grado di ricevere ed inviare messaggi. Gli agenti agiscono
 *         tramite i behaiors che possono essere di vari tipi.
 */
public class TestAgent extends ToolAgent implements ITestAgent {

    int snifferCounter = 0;
    int dummyCounter = 0;
    int logCounter = 0;
    int introspectorCounter = 0;

    // Sniffer message list
    static public Vector<String> ml = new Vector<String>();

    // Log Manager log list
    static public Vector<Object> ll = new Vector<Object>();

    // Dummy message list
    static public Vector<String> dl = new Vector<String>();

    // Introspector behaviours list
    static public Vector<BehaviourID> bl = new Vector<BehaviourID>();

    // Introspector actual state of the agent under debugging
    static public String as = "";

    // Introspector sent message list
    static public Vector<String> sl = new Vector<String>();

    // Introspector received message list
    static public Vector<String> rl = new Vector<String>();

    // Introspector posted message list
    static public Vector<String> pl = new Vector<String>();

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



        DFAgentDescription dfd = new DFAgentDescription();
        ServiceDescription sd = new ServiceDescription();
        dfd.setName(getAID());
        sd.setName("Graphic User Interface Managing Service");
        sd.setType("A service capable of managing the interactions with the GUI");
        dfd.addServices(sd);
        try{
            DFService.register(this, dfd);
        }
        catch(FIPAException fe){
            fe.printStackTrace();
        }





        // Serve per ricevere notifica degli eventi da parte di AMS
        AMSSubscriber subscriber = new AMSSubscriber() {
            protected void installHandlers(Map handlers) {
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

            EventHandler Eh = new EventHandler() {
                public void handle(Event ev) {
                    DeadAgent da = (DeadAgent) ev;
                    ContainerID cid = da.getWhere();
                    // ContainerID is null in case of foreign agents registered with the local AMS
                    // or virtual agents
                    if (cid != null) {
                        String container = cid.getName();
                        AID agent = da.getAgent();
                        System.out.println("\"\n" + "\"\n" + container + agent.toString() + "\"\n" + "\"\n");
                        // myGUI.removeAgent(container, agent);
                    }
                }
            };
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

    // Il parser determina il contenuto del messaggio ricevuto tramite
    // l'AMSSubscriber
    // tiene dunque conto della creazione/distruzione degli ultimi agenti in un
    // vector
    private void parse(ACLMessage msg) {
        String[] lastAgent = new String[4]; // name, container, addedd/removed, ip
        String content = msg.getContent();
        if (content.contains("occurred")) {
            if (content.contains("born-agent")) {
                Integer i = 0;
                Integer n = content.indexOf(":name") + 6;
                String name = "";
                String container = "";
                while (i != 2) {
                    name = name + content.charAt(n);
                    n++;
                    if (content.charAt(n + 1) == ':' || content.charAt(n) == ')') {
                        i++;
                    }
                }
                i = 0;
                n = content.indexOf("container-ID :name") + 19;
                while (i != 1) {
                    container = container + content.charAt(n);
                    n++;
                    if (content.charAt(n + 1) == ':') {
                        i++;
                    }
                }
                lastAgent[0] = name;
                lastAgent[1] = container;
                lastAgent[2] = "addedd";
                lastAgent[3] = "";
                changedAgents.add(lastAgent);
            } else if (content.contains("dead-agent")) {
                Integer i = 0;
                Integer n = content.indexOf(":name") + 6;
                String name = "";
                String container = "";
                while (i != 2) {
                    name = name + content.charAt(n);
                    n++;
                    if (content.charAt(n + 1) == ':' || content.charAt(n) == ')') {
                        i++;
                    }
                }
                i = 0;
                n = content.indexOf("container-ID :name") + 19;
                while (i != 1) {
                    container = container + content.charAt(n);
                    n++;
                    if (content.charAt(n + 1) == ':') {
                        i++;
                    }
                }
                lastAgent[0] = name;
                lastAgent[1] = container;
                lastAgent[2] = "removed";
                lastAgent[3] = "";
                changedAgents.add(lastAgent);
            } else if (content.contains("added-container")) {
                Integer i = 0;
                Integer n = content.indexOf("container-ID :name") + 19;
                String name = null;
                String container = "";
                String ip = "";
                while (i != 1) {
                    container = container + content.charAt(n);
                    n++;
                    if (content.charAt(n + 1) == ':') {
                        i++;
                    }
                }
                n = n + 11;
                i = 0;
                while (i != 1) {
                    ip = ip + content.charAt(n);
                    n++;
                    if (content.charAt(n + 1) == '"') {
                        i++;
                    }
                }
                lastAgent[0] = name;
                lastAgent[1] = container;
                lastAgent[2] = "addedd";
                lastAgent[3] = ip;
                changedAgents.add(lastAgent);
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

    private AMSAgentDescription[] agentsRequest() {
        // FIXME: Only able to retrive all the agents, not the ones of a precise
        // container
        AMSAgentDescription[] agents = null;
        SearchConstraints c = new SearchConstraints();
        c.setMaxResults(new Long(-1));
        try {
            agents = AMSService.search(this, new AMSAgentDescription(), c);
        } catch (FIPAException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return agents;
    }

    public String[] agentsNameRequest() {
        AMSAgentDescription[] agents = agentsRequest();
        String agentsNames[] = new String[agents.length];
        for (int i = 0; i < agents.length; i++) {
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
            req.setContent("((action " + getAMS() + " (modify (ams-agent-description  :name (agent-identifier :name "
                    + name + ") :state suspended))))");
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
            req.setContent("((action " + getAMS() + " (modify (ams-agent-description  :name (agent-identifier :name "
                    + name + ") :state active))))");
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
            req.setContent("((action " + getAMS()
                    + " (clone-agent :mobile-agent-description (mobile-agent-description :name (agent-identifier :name "
                    + name + ") :destination (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP)) :new-name " + newname
                    + ")))");
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
            req.setContent("((action " + getAMS()
                    + " (move-agent :mobile-agent-description (mobile-agent-description :name (agent-identifier :name "
                    + name + ") :destination (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP)))))");
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
            req.setContent("((action " + getAMS() + " (freeze-agent :agent (agent-identifier :name " + name
                    + ") :repository JADE-DB)))");
            req.setOntology("JADE-Persistence");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Agent " + name + " froze");
        }
    }

    public void thawRequest(String name, String container) {
        if (name == null || container == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (thaw-agent :agent (agent-identifier :name " + name
                    + ") :repository JADE-DB :new-container (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\"))))");
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
            req.setContent("((action " + getAMS() + " (save-agent :agent (agent-identifier :name " + name
                    + ") :repository JADE-DB)))");
            req.setOntology("JADE-Persistence");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Agent " + name + " saved");
        }
    }

    public int snifferRequest(String container) {
        snifferCounter++;
        if (container == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (create-agent :agent-name sniffer" + snifferCounter 
                    + " :class-name controller.tools.Sniffer :container (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP))))");
            // req.setContent("((action " + getAMS() + " (create-agent :agent-name sniffer" + snifferCounter
            //         + " :class-name jade.tools.sniffer.Sniffer :container (container-ID :name " + container
            //         + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP))))");
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Sniffer agent " + snifferCounter + " started on container " + container);
        }
        return snifferCounter;
        // l'evento subscribe successivo alla richiesta di creazione dell'agente
        // sniffer, viene eseguito automaticamente
        // pertanto non è necessario implementarlo qui
    }
    
    public void doSniffRequest(String name) {
        AMSAgentDescription[] agents = agentsRequest();
        AID sniffer = null;
        AID target = null;
        for (AMSAgentDescription i : agents) {
            if(i.getName().toString().contains("sniffer" + String.valueOf(snifferCounter)) && i.getName().toString().indexOf("-on-") == -1){
                sniffer = i.getName();
            }
            else if(i.getName().toString().contains(name)){
                target = i.getName();
            }
        }
        ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
        req.setSender(sniffer);
        req.addReceiver(getAMS());
        req.setContent("((action " + getAMS() + " (sniff-on :sniffer (agent-identifier :name " + sniffer.getName()
                   + " :addresses (sequence " + getAMS().toString().substring(getAMS().toString().indexOf("http")) 
                   + " :sniffed-agents (sequence (agent-identifier :name " + target.getName() + ")))))");
        req.setOntology("JADE-Agent-Management");
        req.setLanguage("fipa-sl0");
        req.setProtocol("fipa-request");
        send(req);
    }

    public void doNotSniffRequest(String name) {
        AMSAgentDescription[] agents = agentsRequest();
        AID sniffer = null;
        AID target = null;
        for (AMSAgentDescription i : agents) {
            if(i.getName().toString().contains("sniffer" + String.valueOf(snifferCounter)) && i.getName().toString().indexOf("-on-") == -1){
                sniffer = i.getName();
            }
            else if(i.getName().toString().contains(name)){
                target = i.getName();
            }
        }
        ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
        req.setSender(sniffer);
        req.addReceiver(getAMS());
        req.setContent("((action " + getAMS() + " (sniff-off :sniffer (agent-identifier :name " + sniffer.getName()
                   + " :addresses (sequence " + getAMS().toString().substring(getAMS().toString().indexOf("http")) 
                   + " :sniffed-agents (sequence (agent-identifier :name " + target.getName() + ")))))");
        req.setOntology("JADE-Agent-Management");
        req.setLanguage("fipa-sl0");
        req.setProtocol("fipa-request");
        send(req);
    }

    public Object[] getSniffedMsgRequest() {
        Object[] tmp = ml.toArray().clone();
        ml.clear();
        return tmp;
    }

    public int dummyRequest(String container) {
        dummyCounter++;
        if (container == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (create-agent :agent-name da" + dummyCounter + " :class-name controller.tools.Dummy :container (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP))))");
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Dummy agent " + dummyCounter + " started on container " + container);
        }
        // l'evento subscribe successivo alla richiesta di creazione dell'agente dummy, viene eseguito automaticamente
        // pertanto non è necessario implementarlo qui
        return dummyCounter;
    }

    public void sendDummyRequest(String senderName, String receiverName, int commType, String content, String ontology, String language, String protocol, String conversation, String repTo, String repWith, String encoding){
        AMSAgentDescription[] agents = agentsRequest();
        AID sender = null;
        AID receiver = null;
        for (AMSAgentDescription i : agents) {
            if(i.getName().toString().contains(senderName)){
                sender = i.getName();
            }
            else if(i.getName().toString().contains(receiverName)){
                receiver = i.getName();
            }
        }
        ACLMessage req = new ACLMessage(commType);
        req.setSender(sender);
        req.addReceiver(receiver);
        req.setContent(content);
        req.setOntology(ontology);
        req.setLanguage(language);
        req.setProtocol(protocol);
        req.setConversationId(conversation);
        req.setReplyWith(repWith);
        req.setInReplyTo(repTo);
        req.setEncoding(encoding);
        send(req);
    }

    public Object[] getDummyMsgRequest() {
        Object[] tmp = dl.toArray().clone();
        dl.clear();
        return tmp;
    }

    public int logRequest(String container) {
        logCounter++;
        if (container == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (create-agent :agent-name log" + logCounter + " :class-name controller.tools.Log :container (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP))))");
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Log agent " + logCounter + " started on container " + container);
        }
        // l'evento subscribe successivo alla richiesta di creazione dell'agente log, viene eseguito automaticamente
        // pertanto non è necessario implementarlo qui
        return logCounter;
    }

    public Object[] startLoggingRequest(){
        // System.out.println(ll.toString());
        Object[] tmp = ll.toArray().clone();
        ll.clear();
        return tmp;
    }

    public int introspectorRequest(String container) {
        introspectorCounter++;
        if (container == null) {
            System.out.println("Invalid parameters");
        } else {
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());
            req.setContent("((action " + getAMS() + " (create-agent :agent-name introspector" + introspectorCounter + " :class-name controller.tools.Introspector  :container (container-ID :name " + container
                    + " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP))))");
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
            System.out.println("Introspector agent " + introspectorCounter + " started on container " + container);
        }
        // l'evento subscribe successivo alla richiesta di creazione dell'agente introspector, viene eseguito automaticamente
        // pertanto non è necessario implementarlo qui
        return introspectorCounter;
    }

    public void debugOnRequest(String name){
        AMSAgentDescription[] agents = agentsRequest();
        AID introspector = null;
        AID target = null;
        for (AMSAgentDescription i : agents) {
            if(i.getName().toString().contains("introspector" + String.valueOf(introspectorCounter)) && i.getName().toString().indexOf("-on-") == -1){
                introspector = i.getName();
            }
            else if(i.getName().toString().contains(name)){
                target = i.getName();
            }
        }
        ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
        req.setSender(introspector);
        req.addReceiver(getAMS());
        req.setContent("((action " + getAMS() + " (debug-on :debugger (agent-identifier :name " + introspector.getName()
                        + " :addresses (sequence " + getAMS().toString().substring(getAMS().toString().indexOf("http")) 
                        + " :debugged-agents (sequence (agent-identifier :name " + target.getName() + ")))))");
        req.setOntology("JADE-Agent-Management");
        req.setLanguage("fipa-sl0");
        req.setProtocol("fipa-request");
        send(req);
        System.out.println("\n\nDebugging request sent\n\n" + req.toString() + "\n\n");
    }

    public void debugOffRequest(String name){
        AMSAgentDescription[] agents = agentsRequest();
        AID introspector = null;
        AID target = null;
        for (AMSAgentDescription i : agents) {
            if(i.getName().toString().contains("introspector" + String.valueOf(introspectorCounter)) && i.getName().toString().indexOf("-on-") == -1){
                introspector = i.getName();
            }
            else if(i.getName().toString().contains(name)){
                target = i.getName();
            }
        }
        ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
        req.setSender(introspector);
        req.addReceiver(getAMS());
        req.setContent("((action " + getAMS() + " (debug-off :debugger (agent-identifier :name " + introspector.getName()
                   + " :addresses (sequence " + getAMS().toString().substring(getAMS().toString().indexOf("http")) 
                   + " :debugged-agents (sequence (agent-identifier :name " + target.getName() + ")))))");
        req.setOntology("JADE-Agent-Management");
        req.setLanguage("fipa-sl0");
        req.setProtocol("fipa-request");
        send(req);
    }

    public Object[] getBehavioursRequest(){
        return bl.toArray();
    }

    public String getCurrentStateRequest(){
        return as;
    }

    public Object[] getSentMsgRequest(){
        Object[] tmp = sl.toArray().clone();
        sl.clear();
        return tmp;
    }

    public Object[] getReceivedMsgRequest(){
        Object[] tmp = rl.toArray().clone();
        rl.clear();
        return tmp;
    }
	public Object[] getPostedMsgRequest(){
        Object[] tmp = pl.toArray().clone();
        pl.clear();
        return tmp;
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
        return lastAgent;
    }

}
