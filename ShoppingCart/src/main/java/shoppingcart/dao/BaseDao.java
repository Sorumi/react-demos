package shoppingcart.dao;

import org.hibernate.Session;

/**
 * Created by Sorumi on 17/2/24.
 */
public interface BaseDao {

    public Session setUpSession();

    public void commitAndClose(Session session);
}
