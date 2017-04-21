import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import MainLayout from '../components/MainLayout/MainLayout';

import UsersComponent from '../components/Users/Users';
function Users({location}) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <UsersComponent/>
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Users);
