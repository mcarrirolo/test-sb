package test;

// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

// @Controller
@RestController
public class TestController {

    String greeting = "Hello world!";

    @RequestMapping("/")
    public String index() {
        return "forward:/index.html";
    }
    @GetMapping(path = "/hello-world")
	public String helloWorld(){
		return greeting;
	}

}