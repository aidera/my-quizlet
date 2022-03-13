import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

import styles from './App.module.scss';

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>Header</Header>
      <Content>
        <div className={styles.container}>
          <Outlet />
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
