import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function SalesReturn() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/salesreturn`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/salesreturn/${id}`).then(function(response){
            getDatas();
        });
    }  
  return (
    <AdminLayout>
         <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-12 order-md-1 order-last">
                        <br/><h1 style={{textAlign: 'center'}}>SalesReturn Report</h1>
                    </div>
                    
                </div>
            </div>

            <div className="row" id="table-bordered">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">All Sales Return</h4>
                            <Link to={'/salesreturn/add'} className='btn btn-primary float-right' >Add New</Link>
                        </div>
                        <div className="card-content">
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th>customer</th>
                                            <th>Total</th>
                                            <th>Discount</th>
                                            <th>Tax</th>
                                            <th>Grand Total</th>
                                            <th>Due Amount</th>
                                            <th>Satus</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                            <td>{d.customer?.name}</td>
                                            <td>{d.total}</td>
                                            <td>{d.discountamt}</td>
                                            <td>{d.taxamt}</td>
                                            <td>{d.gtotal}</td>
                                            <td>{d.gtotal - d.payment_sum_amount}</td>
                                            <td>{d.payment_sum_amount==d.gtotal?`Paid`:`Partial Paid`}</td>
                                            <td>
                                                <Link to={`/salesreturn/pay/${d.id}`} className='btn btn-info' >Pay Due</Link>
                                                {/* <Link to={`/sales/edit/${d.id}`} className='btn btn-info' >Edit</Link> */}
                                                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    )}
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

export default SalesReturn