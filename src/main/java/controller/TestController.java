package controller;

// import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

import jade.wrapper.StaleProxyException;



// @RestController
@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class TestController {

    String greeting = "Hello world!";

    @RequestMapping("/")
    public String index() {
        return "forward:/index.html";
    }

    @GetMapping("/hello-world")
    @ResponseBody
	public String helloWorld(){
        System.out.println(greeting);
        return greeting;
    }

    // choose between GET and POST method

    @GetMapping("/changeName")
    @ResponseStatus(HttpStatus.OK)
    public void changeName(@RequestParam String name) {
        greeting = "Hello " + name;
        System.out.println(greeting);
    }

    // to use if POST method is preffered, need JSON parsing
    //
    // @RequestMapping("/changeName")
    // @ResponseStatus(value = HttpStatus.OK)
    // public void changeName(@RequestBody String name) {
    //     greeting = "Hello " + name;
    //     System.out.println(greeting);
    // }

    @GetMapping("/start")
    @ResponseStatus(HttpStatus.OK)
    public void start(@RequestParam String name, @RequestParam String clas, @RequestParam String args, @RequestParam String owner, @RequestParam String container) {
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
				System.out.println("gam is null");
            }
            else{
                gam.sendNewAgentRequest(name, clas, args, owner, container);
            }
		} catch (StaleProxyException e) {
            e.printStackTrace();
		}
    }

    @GetMapping("/platformName")
    // @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public String platformName(){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
                return "not working";
            }
            else{
                return gam.platformNameRequest();
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            return "not working";
        }
    }

    @GetMapping("/containerName")
    // @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public String containerName(){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
                return "not working";
            }
            else{
                return gam.containerNameRequest();
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            return "not working";
        }
    }

    @GetMapping("/agentsName")
    // @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public String[] agentsName(){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
                return null;
            }
            else{
                return gam.agentsNameRequest();
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/kill")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void kill(@RequestParam String name){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.killRequest(name);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/suspend")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void suspend(@RequestParam String name){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.suspendRequest(name);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/resume")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void resume(@RequestParam String name){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.resumeRequest(name);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/clone")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void clone(@RequestParam String name, @RequestParam String container, @RequestParam String newname){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.cloneRequest(name, container, newname);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/migrate")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void migrate(@RequestParam String name, @RequestParam String container){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.migrateRequest(name, container);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/freeze")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void freeze(@RequestParam String name){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.freezeRequest(name);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/thaw")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void thaw(@RequestParam String name, @RequestParam String container){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.thawRequest(name, container);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/save")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void save(@RequestParam String name){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.saveRequest(name);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/sniffer")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void sniffer(@RequestParam String container){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.snifferRequest(container);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/dummy")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void dummy(@RequestParam String container){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.dummyRequest(container);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/log")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void log(@RequestParam String container){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.logRequest(container);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @GetMapping("/introspector")
    @ResponseStatus(HttpStatus.OK)
    // @ResponseBody
    public void introspector(@RequestParam String container){
        try {
            ITestAgent gam = Launcher.gamCtrl.getO2AInterface(ITestAgent.class);
            if (gam == null) {
                System.out.println("gam is null");
            }
            else{
                gam.introspectorRequest(container);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

}