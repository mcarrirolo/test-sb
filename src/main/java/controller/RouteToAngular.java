package controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// Since some path are not mapped in any of the spring controller, spring application dispatch the request to /error
// If we are trying to route a page with angular we need to route it back from spring so that the /something page will be routed by Angular.

@Controller
public class RouteToAngular implements ErrorController {

    @RequestMapping("/error")
    public String handleError() {
        return "/";
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}