package shoppingcart.bean;

import java.util.List;

/**
 * Created by Sorumi on 17/4/21.
 */
public class Page<T> {
    /**
     * 当前页数
     */
    private int pageNo;
    /**
     * 每页显示的条目数
     */
    private int pageSize;
    /**
     * 排序字段名称
     */
    private String orderBy;
    /**
     * 排序方向
     */
    private String order;
    /**
     * 总条目数
     */
    private int totalCount;
    /**
     * 当前页数据列表
     */
    private List<T> result;

    public int getPageNo() {
        return pageNo;
    }

    public void setPageNo(int pageNo) {
        this.pageNo = pageNo;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public String getOrderBy() {
        return orderBy;
    }

    public void setOrderBy(String orderBy) {
        this.orderBy = orderBy;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public List<T> getResult() {
        return result;
    }

    public void setResult(List<T> result) {
        this.result = result;
    }

    public int getTotalCount() {
        return totalCount;
    }
}
