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

}