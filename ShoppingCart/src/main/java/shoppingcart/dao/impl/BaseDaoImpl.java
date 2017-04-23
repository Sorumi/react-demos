package shoppingcart.dao.impl;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;
import shoppingcart.dao.BaseDao;
import shoppingcart.util.ResultMessage;

import java.util.List;

/**
 * Created by Sorumi on 17/2/24.
 */
@Repository
public class BaseDaoImpl implements BaseDao {

    @Autowired
    protected SessionFactory sessionFactory;

    /**
     * 初始化Session
     */
    public Session setUpSession() {
        Session session = sessionFactory.openSession();
        session.beginTransaction();
        return session;
    }

    /**
     * 提交事务及关闭session
     */
    public void commitAndClose(Session session) {
        session.getTransaction().commit();
        session.close();
    }

    protected ResultMessage add(Object object) {
        try {
            Session session = setUpSession();
            session.save(object);
            commitAndClose(session);
        } catch (Exception e) {
            e.printStackTrace();
            return ResultMessage.FAILED;
        }
        return ResultMessage.SUCCESS;
    }

    protected ResultMessage update(Object object) {
        try {
            Session session = setUpSession();
            session.update(object);
            commitAndClose(session);
        } catch (DataAccessException e) {
            e.printStackTrace();
            return ResultMessage.FAILED;
        }
        return ResultMessage.SUCCESS;
    }

    protected ResultMessage delete(Object object) {
        try {
            Session session = setUpSession();
            session.delete(object);
            commitAndClose(session);
        } catch (DataAccessException e) {
            e.printStackTrace();
            return ResultMessage.FAILED;
        }
        return ResultMessage.SUCCESS;
    }

    protected ResultMessage delete(Class c, String id) {
        try {
            Session session = setUpSession();
            Object object = session.get(c, id);
            session.delete(object);
            commitAndClose(session);
        } catch (DataAccessException e) {
            e.printStackTrace();
            return ResultMessage.FAILED;
        }
        return ResultMessage.SUCCESS;
    }

    protected long count(Class c) {
        long count = 0;
        try {
            Session session = setUpSession();
            String hql = "select count(*) from " + c.getName();
            count = (Long) session.createQuery(hql).uniqueResult();
            commitAndClose(session);
        } catch (DataAccessException e) {
            e.printStackTrace();
        }
        return count;
    }

    protected Object findById(Class c, String id) {
        Object object = null;
        try {
            Session session = setUpSession();
            object = session.get(c, id);
            commitAndClose(session);
        } catch (DataAccessException e) {
            e.printStackTrace();
        }
        return object;
    }

    protected List findAll(Class c) {
        List list = null;
        try {
            Session session = setUpSession();
            String hql = "from " + c.getName();
            list = session.createQuery(hql).list();
            commitAndClose(session);
        } catch (DataAccessException e) {
            e.printStackTrace();
        }
        return list;
    }

    protected List findByFieldAndValue(Class c, String field, Object value) {
        List list = null;
        try {
            Session session = setUpSession();
            String hql = "from " + c.getName() + " where " + field + " = :value";
            Query query = session.createQuery(hql);
            query.setParameter("value", value);
            list = query.list();
            commitAndClose(session);
        } catch (DataAccessException e) {
            e.printStackTrace();
        }
        return list;
    }

}
