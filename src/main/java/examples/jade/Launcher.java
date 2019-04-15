/**
 * 
 */
package examples.jade;

import jade.core.Profile;
import jade.core.ProfileImpl;
import jade.wrapper.AgentContainer;
import jade.wrapper.AgentController;
import jade.wrapper.ContainerController;
import jade.wrapper.StaleProxyException;

/**
 * @author Dr. Jacopo Pellegrino
 * Questa classe contiene un esempio di codice per lanciare la piattaforma da codice java
 * La piattaforma ha un container principale detto MainContainer che ha al suo interno gli 
 * agenti principali come ad esempio AMS. Ovviamente si possono creare altri agenti in questo
 * continer. Oltre a questo si possono creare ulteriori container che hanno come Main un
 * MainContainer creato in precedenza
 */
public class Launcher {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		jade.core.Runtime runtime = jade.core.Runtime.instance();
		Profile p = new ProfileImpl();

		// Creare il main container: queste opzioni sono cooome quelle passate da command line
		p.setParameter(Profile.MAIN_HOST, "localhost"); 
		p.setParameter(Profile.MAIN_PORT, "1099");
		p.setParameter(Profile.CONTAINER_NAME, "MainContainer");
		p.setParameter(Profile.GUI, "true"); // Questa opzione crea la GUI attuale con RMA 

		System.out.println("Creating main container");
		ContainerController mcc = runtime.createMainContainer(p);
		
		// Creare un secondo container in questo caso sulla stessa macchina (localhost)
		ProfileImpl p2 = new ProfileImpl();
		p2.setParameter(Profile.CONTAINER_NAME, "Container2");
		p2.setParameter(Profile.MAIN_HOST, "localhost"); // for local testing
		p2.setParameter(Profile.MAIN_PORT, "1099");
		
		System.out.println("Creating agent container");
		AgentContainer acc = runtime.createAgentContainer(p2);
		
		// Di seguito la creazioe di due agenti, uno nel main e uno nell'altro container
		try {
			System.out.println("Creating agent1 in main container");
			AgentController agent1 = mcc.createNewAgent("agent1", "examples.jade.TestAgent", null);
			agent1.start();
			
			System.out.println("Creating agent2 in container");
			acc.createNewAgent("agent2", "examples.jade.TestAgent", null).start();
		} catch (StaleProxyException e) {
			e.printStackTrace();
		}
		

	}

}
