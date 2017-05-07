package shoppingcart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Sorumi on 17/5/4.
 */

@Controller
@RequestMapping("/")
public class HomeController {

    @RequestMapping(value = "*")
    public String index() {
        return "index";
    }
}
