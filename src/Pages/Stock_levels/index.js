import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function StockLevels () {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/stock`).then(function(response) {
            setData(response.data.data);
        });
    }
    
  return (
<AdminLayout>
<div class="container mt-5">
    <h2>Current Stock Levels</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Minimum Stock Level</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            {data && data.map((d, key) =>
                <tr key={d.id}>
                    <td>{d.name}</td>
                    <td>{d.qty}</td>
                    <td><span class="badge bg-success">In Stock</span></td>
                </tr>
            )}
            
        </tbody>
    </table>
</div>
  </AdminLayout>

)
}

export default StockLevels
