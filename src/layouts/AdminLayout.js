import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';
import './assets_admin/css/bootstrap.css';
import './assets_admin/css/app.css';
// import 'font-awesome/css/font-awesome.min.css';

function AdminLayout({children}) {
  return (
    <div id="app">
        <Sidebar />
        <div id="main">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    </div>
  )
}

export default AdminLayout