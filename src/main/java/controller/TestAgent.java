/**
 * 
 */
package controller;

import jade.content.lang.sl.SLCodec;
import jade.core.Agent;
import jade.core.behaviours.CyclicBehaviour;
import jade.domain.FIPANames;
import jade.lang.acl.ACLMessage;
import jade.lang.acl.MessageTemplate;


/**
 * @author Dr. Jacopo Pellegrino
 * Questa classe estende Agent ed è un esempio di agente in grado di ricevere ed inviare messaggi.
 * Gli agenti agiscono tramite i behaiors che possono essere di vari tipi.
 */
public class TestAgent extends Agent implements ITestAgent {

	/* 
	 * Il setup è il primo metodo ad essere eseguito quando l'agente viene creato.
	 * Quindi è il posto adatto per eventuali inizializzazioni e per la definizione
	 * dei behavior fondamentali
	 */
	@Override
	protected void setup() {
		super.setup();
        System.out.println(this.getLocalName() + " was born");

		registerO2AInterface(ITestAgent.class, this);
		System.out.println("Hello from " + this.getLocalName()); 
		getContentManager().registerLanguage(new SLCodec(), FIPANames.ContentLanguage.FIPA_SL0);
        // getContentManager().registerOntology(EventOntology.getInstance());
        

		// In questo caso aggiungo un CyclicBehaviour (cioè un behavior che, semplificando, viene eseguito in continuazione)
		addBehaviour(new CyclicBehaviour() {
			
			MessageTemplate tmpl = MessageTemplate.MatchPerformative(ACLMessage.INFORM);
			
			// il metodo action di CyclicBehaviour indica quale logica viene eseguita 
			// nello specifico l'agente controlla la coda di messaggi e se trova un messaggio
			// lo stampa e risponde 
			@Override
			public void action() {
				ACLMessage msg = myAgent.receive(tmpl);
				if (msg != null) {
					System.out.println(myAgent.getLocalName() + " received\n" + msg);
					
					// Come creare un messaggio in generale
					// creando il messaggio si passa come argomento una performativa che indica lo scopo della comunicazione
					ACLMessage reply = new ACLMessage(ACLMessage.INFORM);
					// si aggiunge un AID come receiver. L'AID indica l'indirizzo del destinatario, getAMS() restituisce quello di AMS
					reply.addReceiver(msg.getSender());
					// L'ontologia descrive e contestualizza il messaggio
					reply.setOntology("");
					// Definisce il contenuto, nella variante setContentObject prende come argomento un oggetto serializable
                    reply.setContent("");
					// Invia il messaggio
					send(reply);
					
					// C'è un modo più rapido per rispondere ad un messaggio
					// questo sistema già receiver ontology e conversation id se serve, poi per il resto è uguale.
                    // ACLMessage quickReply = msg.createReply();
                
				}
			}
		});
    }
    
    public void sendNewAgentRequest(String name, String clas, String args, String owner, String container){
        
        // EXPERIMENTAL
        if(name == null | clas == null | container == null){
            System.out.println("Invalid parameters");
        }
        else{
            ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
            req.addReceiver(getAMS());                  
            req.setContent("((action " + getAMS() + 
                            " (create-agent :agent-name " + name +
                            " :class-name " + clas +
                            " :arguments (sequence " + args +
                            ")  :container (container-ID :name " + container + 
                            " :protocol JADE-IMTP :address \"<Unknown Host>\" :protocol JADE-IMTP))))");
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
    
            send(req);
    
            System.out.println("Agent " + name + " has been crated");
        }
        
    }

    public String platformNameRequest(){
        return getContainerController().getName();
    }
	

	
}
