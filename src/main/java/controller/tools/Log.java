package controller.tools;

//#ANDROID_EXCLUDE_FILE

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Iterator;
import java.util.Map;

import controller.TestAgent;
import jade.core.*;
import jade.domain.FIPAAgentManagement.APDescription;
import jade.domain.introspection.*;
import jade.content.lang.sl.SLCodec;
import jade.domain.JADEAgentManagement.JADEManagementOntology;
import jade.tools.logging.ontology.LogManagementOntology;
import jade.tools.logging.ontology.LoggerInfo;
import jade.util.leap.List;
import jade.tools.logging.JavaLoggingLogManagerImpl;
import jade.tools.logging.LogManager;
import jade.tools.logging.LogManagerAgent;
import jade.tools.logging.gui.LogManagerGUI;

/**
 * This tool agent supports local and remote management of logs in JADE containers.
 * 
 * @author Giovanni Caire - TILAB
 * @author Rosalba Bochicchio - TILAB
 */
public class Log extends LogManagerAgent {
    // private LogManagerGUI myGui;
    private LogManager defaultLogManager = new JavaLoggingLogManagerImpl();

	private APDescription myPlatformProfile;
	
	private AMSSubscriber myAMSSubscriber;
	
	protected void setup() {
		getContentManager().registerLanguage(new SLCodec());
		getContentManager().registerOntology(JADEManagementOntology.getInstance());
		getContentManager().registerOntology(LogManagementOntology.getInstance());
		
		myAMSSubscriber = new AMSSubscriber() {
			protected void installHandlers(Map handlersTable) {
				handlersTable.put(IntrospectionVocabulary.META_RESETEVENTS, new EventHandler() {
					public void handle(Event ev) {
						// myGui.resetTree();
					}
				});
				
				handlersTable.put(IntrospectionVocabulary.ADDEDCONTAINER, new EventHandler() {
					public void handle(Event ev) {
						AddedContainer ac = (AddedContainer) ev;
						ContainerID cid = ac.getContainer();
						String name = cid.getName();
						String address = cid.getAddress();
						try {
							InetAddress addr = InetAddress.getByName(address);
							// myGui.addContainer(name, addr);
						} catch (UnknownHostException uhe) {
							// myGui.addContainer(name, null);
						}
					}
				});
				
				handlersTable.put(IntrospectionVocabulary.REMOVEDCONTAINER, new EventHandler() {
					public void handle(Event ev) {
						RemovedContainer rc = (RemovedContainer) ev;
						ContainerID cid = rc.getContainer();
						String name = cid.getName();
						// myGui.removeContainer(name);
					}
				});
				
				//handle the APDescription provided by the AMS
				handlersTable.put(IntrospectionVocabulary.PLATFORMDESCRIPTION, new EventHandler() {
					public void handle(Event ev) {
						PlatformDescription pd = (PlatformDescription) ev;
						APDescription APdesc = pd.getPlatform();
						myPlatformProfile = APdesc;
						// myGui.refreshLocalPlatformName(myPlatformProfile.getName());
					}
				});
				
			}
		};
		
		addBehaviour(myAMSSubscriber);
		
		// myGui = new LogManagerGUI(this);
        // myGui.showCorrect();	

        List tmp = defaultLogManager.getAllLogInfo();
        // Now sort log info in alphabetical order
		List infos = new jade.util.leap.ArrayList(tmp.size());
		Iterator it = tmp.iterator();
		while (it.hasNext()) {
			LoggerInfo li = (LoggerInfo) it.next();
			String name = li.toString();
			int i = 0;
			while (i < infos.size() && name.compareTo(infos.get(i).toString()) >= 0) {
				++i;
			}
			infos.add(i, li);
        }
        Object[] var = infos.toArray();
        for (Object i : var) {
            controller.TestAgent.ll.add(i);
        }
	}
	
	protected void takeDown() {
		// myGui.dispose();
		send(myAMSSubscriber.getCancel());
	}
}
