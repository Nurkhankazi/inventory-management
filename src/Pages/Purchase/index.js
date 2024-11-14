import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Purchase() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/purchase`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/purchase/${id}`).then(function(response){
            getDatas();
        });
    }  
  return (
    <AdminLayout>
         <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-12 order-md-1 order-last">
                        <br/><h1 style={{textAlign: 'center'}}>Purchase Report</h1>
                    </div>
                    
                </div>
            </div>

            <div className="row" id="table-bordered">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">All Purchase</h4>
                            <Link to={'/purchase/add'} className='btn btn-primary float-right' >Add New</Link>
                        </div>
                        <div className="card-content">
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th>supplier</th>
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
                                            <td>{d.supplier?.suppliername}</td>
                                            <td>{d.total}</td>
                                            <td>{d.discountamt}</td>
                                            <td>{d.taxamt}</td>
                                            <td>{d.gtotal}</td>
                                            <td>{d.gtotal - d.payment_sum_amount}</td>
                                            <td>{d.payment_sum_amount==d.gtotal?`Paid`:`Partial Paid`}</td>
                                            <td>
                                                <Link to={`/purchase/pay/${d.id}`} className='btn btn-info' >Pay Due</Link>
                                                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-danger'>Delete</button>
                                                <Link to={`/purchaseinvoice/${d.id}`} className='btn btn-info' >Invoice</Link>
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

export default Purchase