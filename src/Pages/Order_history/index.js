import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Order_history() {
    
  return (
    <AdminLayout>

<div class="container mt-5">
    <h2>Order History</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Order Date</th>
                <th scope="col">Total Price</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>001</td>
                <td>Sample Item 1</td>
                <td>3</td>
                <td>2024-08-15</td>
                <td>59.97</td>
                <td>Completed</td>
            </tr>
            <tr>
                <td>002</td>
                <td>Sample Item 2</td>
                <td>2</td>
                <td>2024-08-20</td>
                <td>39.98</td>
                <td>Panding</td>
            </tr>
            <tr>
                <td>003</td>
                <td>Sample Item 3</td>
                <td>1</td>
                <td>2024-09-01</td>
                <td>19.99</td>
                <td>Cancelled</td>
            </tr>
            
        </tbody>
    </table>
</div>
    </AdminLayout>       
  )
}

export default Order_history