import React from 'react';
import Header from './include/header';
import Sidebar from './include/sidebar';
import Footer from './include/footer';

function AdminLayout({children}) {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar/>
          {/* Layout container */}
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
      <div className="buy-now">
        <a
          href="https://themeselection.com/item/sneat-bootstrap-html-admin-template/"
          target="_blank"
          className="btn btn-danger btn-buy-now">Upgrade to Pro
        </a>
      </div>
    </>
  )
}

export default AdminLayout