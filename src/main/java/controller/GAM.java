/**
 * 
 */
package controller;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Iterator;
import java.util.Map;
import java.util.Vector;

import jade.content.lang.sl.SLCodec;
import jade.content.onto.basic.Action;
import jade.content.onto.basic.Result;
import jade.core.AID;
import jade.core.BehaviourID;
import jade.core.ContainerID;
import jade.core.behaviours.SenderBehaviour;
import jade.core.behaviours.SequentialBehaviour;
import jade.domain.AMSService;
import jade.domain.DFService;
import jade.domain.FIPAException;
import jade.domain.FIPANames;
import jade.domain.FIPAAgentManagement.AMSAgentDescription;
import jade.domain.FIPAAgentManagement.APDescription;
import jade.domain.FIPAAgentManagement.APService;
import jade.domain.FIPAAgentManagement.DFAgentDescription;
import jade.domain.FIPAAgentManagement.SearchConstraints;
import jade.domain.FIPAAgentManagement.ServiceDescription;
import jade.domain.JADEAgentManagement.JADEManagementOntology;
import jade.domain.JADEAgentManagement.ShutdownPlatform;
import jade.domain.introspection.AddedContainer;
import jade.domain.introspection.AddedMTP;
import jade.domain.introspection.BornAgent;
import jade.domain.introspection.ChangedAgentOwnership;
import jade.domain.introspection.DeadAgent;
import jade.domain.introspection.Event;
import jade.domain.introspection.FrozenAgent;
import jade.domain.introspection.IntrospectionVocabulary;
import jade.domain.introspection.MovedAgent;
import jade.domain.introspection.PlatformDescription;
import jade.domain.introspection.RemovedContainer;
import jade.domain.introspection.RemovedMTP;
import jade.domain.introspection.ResetEvents;
import jade.domain.introspection.ResumedAgent;
import jade.domain.introspection.SuspendedAgent;
import jade.domain.introspection.ThawedAgent;
import jade.domain.mobility.MobilityOntology;
import jade.domain.persistence.PersistenceOntology;
import jade.lang.acl.ACLMessage;
import jade.proto.SimpleAchieveREInitiator;
import jade.tools.ToolAgent;
import jade.util.Logger;

/**
 * 
 * GAM (GUI Management Agent) interactcs with the controller
 * to manage the interface
 * 
 * @author Matteo Carrirolo
 * @author Dr. Jacopo Pellegrino
 * 
 */
public class GAM extends ToolAgent implements IGAM {

    int snifferCounter = 0;
    int dummyCounter = 0;
    int logCounter = 0;
    int introspectorCounter = 0;

    // Keeps track of the changes in the tree
    private Vector<String[]> changed = new Vector<String[]>();

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

    // AP Description of latools platform added
    static public String apd = "";


    private SequentialBehaviour AMSSubscribe = new SequentialBehaviour();
			
	class GAMAMSListenerBehaviour extends AMSListenerBehaviour {
		protected void installHandlers(Map handlersTable) {
            
			// Fill the event handler table.
			
			handlersTable.put(IntrospectionVocabulary.META_RESETEVENTS, new EventHandler() {
				public void handle(Event ev) {
                    ResetEvents re = (ResetEvents)ev;
                    System.out.println("Handled " + re.getName());
				}
			});
			
			handlersTable.put(IntrospectionVocabulary.ADDEDCONTAINER, new EventHandler() {
				public void handle(Event ev) {
					AddedContainer ac = (AddedContainer)ev;
					ContainerID cid = ac.getContainer();
					String name = cid.getName();
					String address = cid.getAddress();
					try {
                        InetAddress addr = InetAddress.getByName(address);
                        System.out.println("Handled " + ac.getName() + ": " + cid.getName() + " at " + getContainerController().getPlatformName());
                        changed.add(new String[]{"", cid.getName(), "added", getContainerController().getPlatformName()});
					}
					catch(UnknownHostException uhe) {
					}
				}
			});
			
			
			handlersTable.put(IntrospectionVocabulary.REMOVEDCONTAINER, new EventHandler() {
				public void handle(Event ev) {
					RemovedContainer rc = (RemovedContainer)ev;
					ContainerID cid = rc.getContainer();
					String name = cid.getName();
				}
			});
			
			handlersTable.put(IntrospectionVocabulary.BORNAGENT, new EventHandler() {
				public void handle(Event ev) {
					BornAgent ba = (BornAgent)ev;
					ContainerID cid = ba.getWhere();
					// ContainerID is null in case of foreign agents registered with the local AMS or virtual agents
                    // FIXME: Such agents should be shown somewhere
                    System.out.println("Handled " + ba.getName() + ": " + ba.getAgent().getName() + " at " + cid.getName());
                    changed.add(new String[]{ba.getAgent().getName(), cid.getName(),"added", ""});
					// if (cid != null) {
					// 	String container = cid.getName();
					// 	AID agent = ba.getAgent();
					// 	myGUI.addAgent(container, agent, ba.getState(), ba.getOwnership());
					// 	if (agent.equals(getAID()))
					// 		myContainerName = container;
					// }
				}
			});
			
			handlersTable.put(IntrospectionVocabulary.DEADAGENT, new EventHandler() {
				public void handle(Event ev) {
					DeadAgent da = (DeadAgent)ev;
					ContainerID cid = da.getWhere();
                    // ContainerID is null in case of foreign agents registered with the local AMS or virtual agents
                    System.out.println("Handled " + da.getName() + ": " + da.getAgent().getName() + " at " + cid.getName());
                    changed.add(new String[]{da.getAgent().getName(), cid.getName(), "removed", ""});
					// if (cid != null) {
					// 	String container = cid.getName();
					// 	AID agent = da.getAgent();
					// }
				}
			});
			
			handlersTable.put(IntrospectionVocabulary.SUSPENDEDAGENT, new EventHandler() {
				public void handle(Event ev) {
					SuspendedAgent sa = (SuspendedAgent)ev;
					// ContainerID cid = sa.getWhere();
					// String container = cid.getName();
					// AID agent = sa.getAgent();
				}
			});
			
			handlersTable.put(IntrospectionVocabulary.RESUMEDAGENT, new EventHandler() {
				public void handle(Event ev) {
					ResumedAgent ra = (ResumedAgent)ev;
					// ContainerID cid = ra.getWhere();
					// String container = cid.getName();
					// AID agent = ra.getAgent();
				}
			});
			
			handlersTable.put(IntrospectionVocabulary.FROZENAGENT, new EventHandler() {
				public void handle(Event ev) {
					FrozenAgent fa = (FrozenAgent)ev;
					// String oldContainer = fa.getWhere().getName();
					// String newContainer = fa.getBufferContainer().getName();
					// AID agent = fa.getAgent();
				}
			});
			
			handlersTable.put(IntrospectionVocabulary.THAWEDAGENT, new EventHandler() {
				public void handle(Event ev) {
					ThawedAgent ta = (ThawedAgent)ev;
					// String oldContainer = ta.getWhere().getName();
					// String newContainer = ta.getBufferContainer().getName();
					// AID agent = ta.getAgent();
				}
			});
			
			handlersTable.put(IntrospectionVocabulary.CHANGEDAGENTOWNERSHIP, new EventHandler() {
				public void handle(Event ev) {
					ChangedAgentOwnership cao = (ChangedAgentOwnership)ev;
					// ContainerID cid = cao.getWhere();
					// String container = cid.getName();
					// AID agent = cao.getAgent();
				}
			});
			
			handlersTable.put(IntrospectionVocabulary.MOVEDAGENT, new EventHandler() {
				public void handle(Event ev) {
					MovedAgent ma = (MovedAgent)ev;
					// AID agent = ma.getAgent();
					// ContainerID from = ma.getFrom();
                    // ContainerID to = ma.getTo();
                    System.out.println("Handled " + ma.getName() + ": " + ma.getAgent().getName() + " from " + ma.getFrom().getName() + " to " + ma.getTo().getName());
                    changed.add(new String[]{ma.getAgent().getName(), ma.getFrom().getName(), "removed", ""});
                    changed.add(new String[]{ma.getAgent().getName(), ma.getTo().getName(), "added", ""});
				}
			});
			
			handlersTable.put(IntrospectionVocabulary.ADDEDMTP, new EventHandler() {
				public void handle(Event ev) {
					AddedMTP amtp = (AddedMTP)ev;
					String address = amtp.getAddress();
                    ContainerID where = amtp.getWhere();
                    System.out.println("Handled " + amtp.getName() + ": " + amtp.getAddress() + " at " + amtp.getWhere());
				}
			});
			
			handlersTable.put(IntrospectionVocabulary.REMOVEDMTP, new EventHandler() {
				public void handle(Event ev) {
					RemovedMTP rmtp = (RemovedMTP)ev;
					String address = rmtp.getAddress();
					ContainerID where = rmtp.getWhere();
				}
			});
			
			//handle the APDescription provided by the AMS
			handlersTable.put(IntrospectionVocabulary.PLATFORMDESCRIPTION, new EventHandler(){
				public void handle(Event ev){
					PlatformDescription pd = (PlatformDescription)ev;
                    APDescription APdesc = pd.getPlatform();
                    System.out.println("Handled " + pd.getName() + ": " + pd.getPlatform().getName());
				}
            });
			
		}
    } // END of inner class GAMAMSListenerBehaviour

    // Sends requests to the AMS
	private class AMSClientBehaviour extends SimpleAchieveREInitiator {
		
		private String actionName;
	
		public AMSClientBehaviour(String an, ACLMessage request) {
			super(GAM.this, request);
			actionName = an;
		}
		protected void handleNotUnderstood(ACLMessage reply) {
			// myGUI.showErrorDialog("NOT-UNDERSTOOD received by RMA during " + actionName, reply);
		}
		protected void handleRefuse(ACLMessage reply) {
			// myGUI.showErrorDialog("REFUSE received during " + actionName, reply);
		}
		protected void handleAgree(ACLMessage reply) {
			if(logger.isLoggable(Logger.FINE))
				logger.log(Logger.FINE,"AGREE received"+reply);
		}
		protected void handleFailure(ACLMessage reply) {
			// myGUI.showErrorDialog("FAILURE received during " + actionName, reply);
		}
		protected void handleInform(ACLMessage reply) {
			if(logger.isLoggable(Logger.FINE))
				logger.log(Logger.FINE,"INFORM received"+reply);
		}
		
	} // End of AMSClientBehaviour class
    
    private class handleAddRemotePlatformBehaviour extends AMSClientBehaviour{
		
		public handleAddRemotePlatformBehaviour(String an, ACLMessage request){
            super(an,request);
            System.out.println("passing");
            changed.add(new String[]{"", "Remote Platforms", "added", ""});
        }
        
		protected void handleInform(ACLMessage msg){

			if(logger.isLoggable(Logger.FINE))
				logger.log(Logger.FINE,"arrived a new APDescription");
			try{
				AID sender = msg.getSender();
                Result r =(Result)getContentManager().extractContent(msg);                				
				Iterator i = r.getItems().iterator();
                APDescription APDesc = (APDescription)i.next();
                Iterator APSer = APDesc.getAllAPServices();
				if(APDesc != null){
                    changed.add(new String[]{"", APDesc.getName().substring(1, APDesc.getName().length() - 1), "added", "Remote Platforms"});
                    while(APSer.hasNext()){
                        APService aps = (APService)APSer.next();
                        System.out.println(aps.getName());
                        apd = apd + aps.getName() + "\n";
                    }
					// myGUI.addRemotePlatformFolder();
					// myGUI.addRemotePlatform(sender,APDesc);
				}
			}catch(Exception e){
				e.printStackTrace();
			}
		}
		
    }//end handleAddRemotePlatformBehaviour
    
    @Override
    protected void toolSetup() {

        // Register the supported ontologies
		getContentManager().registerOntology(MobilityOntology.getInstance());
		getContentManager().registerOntology(PersistenceOntology.getInstance());
		
		// Send 'subscribe' message to the AMS
		AMSSubscribe.addSubBehaviour(new SenderBehaviour(this, getSubscribe()));
		
		// Handle incoming 'inform' messages
		AMSSubscribe.addSubBehaviour(new GAMAMSListenerBehaviour());
		
		// Schedule Behaviour for execution
        addBehaviour(AMSSubscribe);        


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

        System.out.println(this.getLocalName() + " was born");

        registerO2AInterface(IGAM.class, this);
        getContentManager().registerLanguage(new SLCodec(), FIPANames.ContentLanguage.FIPA_SL0);

    }

    public void quitRequest(){
        doDelete();
    }

    public void shutdownRequest(){
        ShutdownPlatform sp = new ShutdownPlatform();
        try {
            Action a = new Action();
            a.setActor(getAMS());
            a.setAction(sp);
            
            ACLMessage requestMsg = getRequest();
            requestMsg.setOntology(JADEManagementOntology.NAME);
            getContentManager().fillContent(requestMsg, a);
            addBehaviour(new AMSClientBehaviour("ShutdownPlatform", requestMsg));
        }
        catch(Exception fe) {
            fe.printStackTrace();
        }
    }

    public String platformNameRequest() {
        return getContainerController().getName();
    }

    private AMSAgentDescription[] remoteAgentsRequest(String remoteContainer) {
        AMSAgentDescription[] agents = null;
        SearchConstraints c = new SearchConstraints();
        c.setMaxResults(new Long(-1));
        try {
            System.out.println("\nRetriving remote agents list...");
            agents = AMSService.search(this, new AID("ams@" + remoteContainer, AID.ISGUID), new AMSAgentDescription(), c);
            System.out.println("\nList retrived, lenght: " + agents.length);
            return agents;
        } catch (FIPAException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    public String[] remoteAgentsNameRequest(String remoteContainer) {
        AMSAgentDescription[] agents = remoteAgentsRequest(remoteContainer);
        String agentsNames[] = new String[agents.length];
        for (int i = 0; i < agents.length; i++) {
            AID agentID = agents[i].getName();
            agentsNames[i] = agentID.getName();
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
            req.setOntology("JADE-Agent-Management");
            req.setLanguage("fipa-sl0");
            req.setProtocol("fipa-request");
            send(req);
        }
        return snifferCounter;
    }
    
    public void doSniffRequest(String name) {
        AID sniffer = new AID("sniffer" + String.valueOf(snifferCounter), AID.ISLOCALNAME);
        AID target = new AID(name, AID.ISLOCALNAME);
        System.out.println(target.getName());
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
        AID sniffer = new AID("sniffer" + String.valueOf(snifferCounter), AID.ISLOCALNAME);
        AID target = new AID(name, AID.ISLOCALNAME);
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
        }
        return dummyCounter;
    }

    public void sendDummyRequest(String senderName, String receiverName, int commType, String content, String ontology, String language, String protocol, String conversation, String repTo, String repWith, String encoding){
        AID sender = new AID(senderName, AID.ISLOCALNAME);
        AID receiver = new AID(receiverName, AID.ISLOCALNAME);
        System.out.println(sender.toString() + receiver.toString());
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
        }
        return logCounter;
    }

    public Object[] startLoggingRequest(){
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
        }
        return introspectorCounter;
    }

    public void debugOnRequest(String name){
        System.out.println("\n\nDebug starting...");
        AID introspector = new AID("introspector" + String.valueOf(introspectorCounter), AID.ISLOCALNAME);
        AID target = new AID(name, AID.ISGUID);
        System.out.println(introspector.toString());
        System.out.println(target.toString());
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
    }

    public void debugOffRequest(String name){
        System.out.println("\n\nDebug ending...");
        AID introspector = new AID("introspector" + String.valueOf(introspectorCounter), AID.ISLOCALNAME);
        AID target = new AID(name, AID.ISGUID);
        System.out.println(introspector.toString());
        System.out.println(target.toString());
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
        bl.clear();
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
        String[] firstinqueue = new String[4]; // name, container, addedd/removed, ip
        if(changed.size() != 0){
            firstinqueue = changed.remove(0);
        }
        else{
            firstinqueue[0] = "";
            firstinqueue[1] = "";
            firstinqueue[2] = "";
            firstinqueue[3] = "";
        }
        return firstinqueue;
    }

    public void addPlatformAMSRequest(String url){
        ACLMessage req = new ACLMessage(ACLMessage.REQUEST);
        req.addReceiver(getAMS());
        req.setContent("((action (agent-identifier :name " + getAMS().getName() + " :addresses (sequence " + url + ")) (get-description)))");
        req.setOntology("FIPA-Agent-Management");
        req.setLanguage("fipa-sl0");
        req.setProtocol("fipa-request");
        send(req);
        addBehaviour(new handleAddRemotePlatformBehaviour("GetDescription", req));
    }

    public void refreshAgentsRequest(String platform){
        String[] agents = remoteAgentsNameRequest(platform);

        for (String a : agents) {
            changed.add(new String[]{a, platform, "added", ""});
        }
    }

    public String getAPDescriptionRequest(){
        String tmp = apd;
        apd = "";
        return tmp;
    }

}
