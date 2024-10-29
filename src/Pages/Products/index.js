import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Products() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/product`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/product/${id}`).then(function(response){
            getDatas();
        });
    }
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-12 order-md-1 order-last">
                        <br/><h1 style={{textAlign: 'center'}}>Product list</h1>
                    </div>
                    
                </div>
            </div>

            <div className="row" id="table-bordered">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">All Product</h4>
                            <Link to={'/products/add'} className='btn btn-primary float-right' >Add New</Link>
                        </div>
                        <div className="card-content">
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>description</th>
                                            <th>quantity</th>
                                            <th>price</th>
                                            <th>category</th>
                                            <th>photo</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data && data.map((d, key) =>
                                        <tr key={d.id}>
                                           
                                            <td>{d.name}</td>
                                            <td>{d.description}</td>
                                            <td>{d.quantity}</td>
                                            <td>{d.price}</td>
                                            <td>{d.category?.name}</td>
                                            <td>
                                                {d?.photo?.split(',').map((src, i) => (
                                                <img src={`${process.env.REACT_APP_BACKEND_URL}/productsadd/${src}`} alt="No photo" width="50px"/>
                                                ))
                                                }
                                            </td>
                                            <td>
                                                <Link to={`/products/edit/${d.id}`} className='btn btn-info' >Edit</Link>
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

export default Products