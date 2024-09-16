import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';
import './assets/vendor/css/core.css';
import './assets/vendor/css/theme-default.css';
import './assets/css/demo.css';
import './assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import './assets/vendor/libs/apex-charts/apex-charts.css';



function AdminLayout({children}) {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Header />
            <div className="content-wrapper">
            <main>{children}</main>
            <Footer />
            <div className="content-backdrop fade"></div>
            </div>
          </div>
      </div>
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  )
}

export default AdminLayout