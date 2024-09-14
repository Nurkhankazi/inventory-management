import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
function Room() {
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>Room</h3>
                    </div>
                    <div className="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" className='breadcrumb-header'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Room</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row" id="table-bordered">
            <div className="col-12">
                <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Bordered table</h4>
                </div>
                <div className="card-content">
                    <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                        <thead>
                            <tr>
                                <th>#SL</th>
                                <th>Room Number</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>101</td>
                                <td>AC</td>
                                <td>Active</td>
                                <td>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
    </AdminLayout>
    
  )
}

export default Room