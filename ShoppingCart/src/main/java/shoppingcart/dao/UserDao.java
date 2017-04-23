package shoppingcart.dao;

import shoppingcart.model.User;
import shoppingcart.util.ResultMessage;

import java.util.List;

/**
 * Created by Sorumi on 17/4/21.
 */
public interface UserDao {

    public ResultMessage addUser(User user);

    public ResultMessage updateUser(User user);

    public ResultMessage deleteUser(String id);

    public long countUsers();

    public User findUserById(String id);

    public List<User> findAllUsers();

    public String findMaxId();

}
