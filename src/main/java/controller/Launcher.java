package controller;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jade.core.Profile;
import jade.core.ProfileImpl;
import jade.wrapper.AgentContainer;
import jade.wrapper.AgentController;
import jade.wrapper.ContainerController;
import jade.wrapper.StaleProxyException;

@SpringBootApplication
public class Launcher {

    static protected AgentController gamCtrl;

    public static void main(String[] args) {

        // STARTING JADE AND SETTING MAIN CONTAINER

        jade.core.Runtime runtime = jade.core.Runtime.instance();
        Profile p = new ProfileImpl();

        // Creare il main container: queste opzioni sono cooome quelle passate da
        // command line
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
            System.out.println("Creating GAM (GUI Agent Manager) in main container");
            gamCtrl = mcc.createNewAgent("GAM", "controller.TestAgent", null);
            gamCtrl.start();

            // System.out.println("Creating agent2 in container");
            // acc.createNewAgent("agent2", "jade.core.Agent", null).start();
        } catch (StaleProxyException e) {
            e.printStackTrace();
        }

        // STARTING THE SPRINGBOOT APPLICATION

        SpringApplication.run(Launcher.class, args);

        // OPEN THE WEB PAGE

        // try {
        //     java.awt.Desktop.getDesktop().browse(new URI("http://localhost:4200"));
        // } catch (IOException e) {
        //     // TODO Auto-generated catch block
        //     e.printStackTrace();
        // } catch (URISyntaxException e) {
        //     // TODO Auto-generated catch block
        //     e.printStackTrace();
        // }

    }

}