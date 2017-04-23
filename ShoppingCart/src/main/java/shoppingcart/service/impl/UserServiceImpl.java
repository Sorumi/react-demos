package shoppingcart.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shoppingcart.bean.Page;
import shoppingcart.dao.UserDao;
import shoppingcart.model.User;
import shoppingcart.service.UserService;
import shoppingcart.util.ResultMessage;

import java.util.List;

/**
 * Created by Sorumi on 17/4/21.
 */

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;


    @Override
    public User addUser(User user) {
        user.setId(generateUserId());
        ResultMessage resultMessage = userDao.addUser(user);
        if (resultMessage == ResultMessage.SUCCESS) {
            return user;
        }
        return null;
    }

    @Override
    public User updateUser(String id, User user) {
        user.setId(id);
        ResultMessage resultMessage = userDao.updateUser(user);
        if (resultMessage == ResultMessage.SUCCESS) {
            return user;
        }
        return null;
    }

    @Override
    public ResultMessage deleteUser(String id) {
        return userDao.deleteUser(id);
    }

    @Override
    public long countUsers() {
        return userDao.countUsers();
    }

    @Override
    public User findUserById(String id) {
        return userDao.findUserById(id);
    }

    @Override
    public List<User> findAllUsers() {
        return userDao.findAllUsers();
    }

    @Override
    public Page<User> findUsersInPage(Integer pageNo, Integer pageSize) {
        Page<User> page = new Page<>();
        List<User> allUsers = findAllUsers();

        pageNo = pageNo == null ? 0 : pageNo;
        pageSize = pageSize == null ? 0 : pageSize;

        if (pageNo == 0 || pageSize == 0) {

            page.setPageNo(0);
            page.setPageSize(0);
            page.setTotalCount(allUsers.size());
            page.setResult(allUsers);

        } else {

            int startIndex = (pageNo - 1) * pageSize;

            if (allUsers.size() < startIndex) {
                return page;
            }

            int endIndex = Math.min(pageNo * pageSize, allUsers.size());

            List<User> users = allUsers.subList(startIndex, endIndex);

            page.setPageNo(pageNo);
            page.setPageSize(pageSize);
            page.setTotalCount(allUsers.size());
            page.setResult(users);
        }
        return page;
    }

    private String generateUserId() {
        int count = Integer.parseInt(userDao.findMaxId()) + 1;
        return String.format("%08d", count);
    }
}
