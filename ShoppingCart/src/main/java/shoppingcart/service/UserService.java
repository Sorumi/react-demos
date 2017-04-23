package shoppingcart.service;

import shoppingcart.bean.Page;
import shoppingcart.model.User;
import shoppingcart.util.ResultMessage;

import java.util.List;

/**
 * Created by Sorumi on 17/4/21.
 */
public interface UserService {

    public User addUser(User user);

    public User updateUser(String id, User user);

    public ResultMessage deleteUser(String id);

    public long countUsers();

    public User findUserById(String id);

    public List<User> findAllUsers();

    public Page<User> findUsersInPage(Integer pageNo, Integer pageSize);
}
