package shoppingcart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import shoppingcart.bean.Page;
import shoppingcart.model.Product;
import shoppingcart.model.User;
import shoppingcart.service.UserService;
import shoppingcart.util.ResultMessage;

import java.util.List;

/**
 * Created by Sorumi on 17/3/28.
 */
@Controller
@RestController
@RequestMapping("/api")
public class TestController {

    @Autowired
    private UserService userService;

    @ResponseBody
    @RequestMapping(
            value = "/product/{id}",
            method = RequestMethod.GET)
    public Product product(
            @PathVariable("id") String id) {
        Product product = new Product();
        product.setId(id);
        product.setName("好的");
        product.setPrice(20.88);
        product.setCompleted(Integer.parseInt(id) % 2 == 0);

        return product;
    }

//    @ResponseBody
//    @RequestMapping(
//            value = "/users",
//            method = RequestMethod.GET)
//    public List<User> users(
//    ) {
//        return userService.findAllUsers();
//    }


    @ResponseBody
    @RequestMapping(
            value = "/users",
            method = RequestMethod.GET,
            produces = {"application/json; charset=UTF-8"})
    public Page<User> findUsersInPage(
            @RequestParam(value = "page", required = false) Integer pageNum,
            @RequestParam(value = "limit", required = false) Integer pageSize) {
        return userService.findUsersInPage(pageNum, pageSize);
    }

    @ResponseBody
    @RequestMapping(
            value = "/users",
            method = RequestMethod.POST,
            produces = {"application/json; charset=UTF-8"})
    public User createUser(
            @RequestBody User user) {
        // sleep to test loading
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return userService.addUser(user);
    }

    @ResponseBody
    @RequestMapping(
            value = "/users/{id}",
            method = RequestMethod.DELETE,
            produces = {"application/json; charset=UTF-8"})
    public ResultMessage deleteUser(
            @PathVariable("id") String id) {
        // sleep to test loading
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return userService.deleteUser(id);
    }

    @ResponseBody
    @RequestMapping(
            value = "/users/{id}",
            method = RequestMethod.PATCH,
            produces = {"application/json; charset=UTF-8"})
    public User updateUser(
            @PathVariable("id") String id,
            @RequestBody User user) {
        // sleep to test loading
        try {
            Thread.sleep(3000);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return userService.updateUser(id, user);
    }
}
