import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Dashboard() {
  return (
    <AdminLayout>
        <>
        <div className="container-xxl flex-grow-1 container-p-y">
          <h1 style={{textAlign: 'center'}}>Inventory management</h1> <br/><br/>
            <div className="row">

                  <div className="col-lg-4  order-0">
                    <div className="card">
                      <div className="d-flex align-items-end row">
                          <div className="card-body text-center">
                            <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
                            <a href="/suppliers/add"><h5 className="card-title text-center">Suppliers</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-4  order-0">
                    <div className="card">
                      <div className="d-flex align-items-end row">
                          <div className="card-body text-center">
                            <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
                            <a href="/customer/add"><h5 className="card-title text-center">Customer</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-4  order-0">
                    <div className="card">
                      <div className="d-flex align-items-end row">
                          <div className="card-body text-center">
                            <h1><i className="menu-icon bi bi-capsule"></i></h1>
                            <a href="/products/add"><h5 className="card-title text-center">Product</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
            </div><br/>


            <div className="row">

                  <div className="col-lg-4  order-0">
                    <div className="card">
                      <div className="d-flex align-items-end row">
                          <div className="card-body text-center">
                            <h1><i className="menu-icon bi bi-person-workspace"></i></h1>
                            <a href="/order/add"><h5 className="card-title text-center">Order</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-4  order-0">
                    <div className="card">
                      <div className="d-flex align-items-end row">
                          <div className="card-body text-center">
                            <h1><i className="menu-icon bi bi-person-plus-fill"></i></h1>
                            <a href="User_Add"><h5 className="card-title text-center">User</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-4  order-0">
                    <div className="card">
                      <div className="d-flex align-items-end row">
                          <div className="card-body text-center">
                            <h1><i className="menu-icon bi bi-capsule"></i></h1>
                            <a href="/purchase/add"><h5 className="card-title text-center">Purchase</h5></a> 
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
        </div>
                
  
  
         
          
   
        </>
    </AdminLayout>       
  )
}

export default Dashboard