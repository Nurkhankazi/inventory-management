import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Dashboard() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f8f9fa',
    },
    title: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '2.5rem',
      color: '#343a40',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    card: {
      margin: '10px',
      flex: '1 1 30%',
      transition: 'transform 0.3s, box-shadow 0.3s',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    cardBody: {
      padding: '20px',
    },
    cardTitle: {
      marginTop: '10px',
      fontSize: '1.25rem',
      color: '#495057',
      textDecoration: 'none',
      color: '#007bff',
    },
    cardLink: {
      textDecoration: 'none',
      color: '#007bff',
    },
    cardLinkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <AdminLayout>
      <div style={styles.container}>
        <h1 style={styles.title}>Inventory Management</h1>
        <div style={styles.row}>


          <div style={styles.card}>
            <div style={styles.cardBody}>
              <h1><i className="menu-icon bi bi-capsule"></i></h1>
              <a href="/products/add" style={styles.cardLink}>
                <h5 style={styles.cardTitle}>Product</h5>
              </a>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardBody}>
              <h1><i className="menu-icon bi bi-capsule"></i></h1>
              <a href="/category/add" style={styles.cardLink}>
                <h5 style={styles.cardTitle}>Category</h5>
              </a>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardBody}>
              <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
              <a href="/order/add" style={styles.cardLink}>
                <h5 style={styles.cardTitle}>Orders</h5>
              </a>
            </div>
          </div>
          <div style={styles.card}>
            <div style={styles.cardBody}>
              <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
              <a href="/suppliers/add" style={styles.cardLink}>
                <h5 style={styles.cardTitle}>Suppliers</h5>
              </a>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardBody}>
              <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
              <a href="/customer/add" style={styles.cardLink}>
                <h5 style={styles.cardTitle}>Customer</h5>
              </a>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardBody}>
              <h1><i className="menu-icon bi bi-capsule"></i></h1>
              <a href="/purchase/add" style={styles.cardLink}>
                <h5 style={styles.cardTitle}>Purchase</h5>
              </a>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardBody}>
              <h1><i className="menu-icon bi bi-capsule"></i></h1>
              <a href="/sales/add" style={styles.cardLink}>
                <h5 style={styles.cardTitle}>Sales</h5>
              </a>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardBody}>
              <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
              <a href="/User_Add" style={styles.cardLink}>
                <h5 style={styles.cardTitle}>User</h5>
              </a>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardBody}>
              <h1><i className="menu-icon bi bi-capsule"></i></h1>
              <a href="/stock_levels" style={styles.cardLink}>
                <h5 style={styles.cardTitle}>Stock</h5>
              </a>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
