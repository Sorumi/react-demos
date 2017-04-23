package shoppingcart.service.impl;

import junit.framework.TestCase;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import shoppingcart.model.User;
import shoppingcart.service.UserService;
import shoppingcart.util.ResultMessage;

import java.util.List;

import static org.junit.Assert.*;

/**
 * Created by Sorumi on 17/4/21.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(locations = {"/applicationContext.xml"})
public class UserServiceImplTest extends TestCase {

    @Autowired
    private UserService userService;

    @Test
    public void addUser() throws Exception {
        User user = new User();
        user.setName("Ervin Howell");
        user.setAddress("Victor Plains");
        user.setWebsite("anastasia.net");
        userService.addUser(user);
    }

    @Test
    public void updateUser() throws Exception {
        User user = userService.findUserById("00000002");
        user.setWebsite("anastasia.org");
        User newUser = userService.updateUser("00000002", user);
        assertNotNull(newUser);
    }

    @Test
    public void deleteUser() throws Exception {
        ResultMessage resultMessage = userService.deleteUser("00000003");
        assertEquals(ResultMessage.SUCCESS, resultMessage);
    }

    @Test
    public void countUsers() throws Exception {
        long count = userService.countUsers();
        assertEquals(2, count);
    }

    @Test
    public void findUserById() throws Exception {
        User user = userService.findUserById("00000001");
        assertNotNull(user);
    }

    @Test
    public void findAllUsers() throws Exception {
        List<User> users = userService.findAllUsers();
        Assert.assertEquals(2, users.size());
    }

}