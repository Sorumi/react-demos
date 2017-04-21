import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';

import { PAGE_SIZE } from '../../constants';
import UserModal from './UserModal';

function Users({dispatch, loading, list: dataSource, total, page: current}) {

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/users',
      query: {page},
    }));
  }

  function deleteHandler(id) {
    dispatch({
      type: "users/remove",
      payload: id,
    })
  }

  //function editHandler(id) {
  //  dispatch({
  //    type: "users/edit"    //,
   //
   // })
  //}

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '网站',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
          <UserModal record={record} actionType='users/patch' id={record.id}>
            <a>Edit</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  //<UserModal record={record} onOk={editHandler.bind(null, record.id)}>
  //  <a>Edit</a>
  //</UserModal>

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <UserModal record={{}} actionType='users/create'>
            <Button type="primary">Create User</Button>
          </UserModal>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          loading={loading}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}


function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    loading: state.loading.models.users,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Users);


//export default Users;
