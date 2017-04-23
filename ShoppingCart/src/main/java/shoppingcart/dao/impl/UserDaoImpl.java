package shoppingcart.dao.impl;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;
import shoppingcart.dao.UserDao;
import shoppingcart.model.User;
import shoppingcart.util.ResultMessage;

import java.util.List;

/**
 * Created by Sorumi on 17/4/21.
 */

@Repository
public class UserDaoImpl extends BaseDaoImpl implements UserDao {
    @Override
    public ResultMessage addUser(User user) {
        return add(user);
    }

    @Override
    public ResultMessage updateUser(User user) {
        return update(user);
    }

    @Override
    public ResultMessage deleteUser(String id) {
        return delete(User.class, id);
    }

    @Override
    public long countUsers() {
        return count(User.class);
    }

    @Override
    public User findUserById(String id) {
        return (User) findById(User.class, id);
    }

    @Override
    public List<User> findAllUsers() {
        return findAll(User.class);
    }

    @Override
    public String findMaxId() {
        String id = "";
        try {
            Session session = setUpSession();
            String hql = "SELECT max(id) FROM User";
            Query query = session.createQuery(hql);
            id = (String)query.uniqueResult();
            commitAndClose(session);
        } catch (DataAccessException e) {
            e.printStackTrace();
        }

        return id;
    }
}
