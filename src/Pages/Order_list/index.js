import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Order_list() {
    
  return (
    <AdminLayout>
        <div class="container mt-5">
    <h2>Pending Orders</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Order Date</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>001</td>
                <td>Sample Item 1</td>
                <td>3</td>
                <td>2024-09-20</td>
                <td>Pending</td>
                <td>
                    <button class="btn btn-info btn-sm">View</button>
                    <button class="btn btn-danger btn-sm">Cancel</button>
                </td>
            </tr>
            <tr>
                <td>002</td>
                <td>Sample Item 2</td>
                <td>5</td>
                <td>2024-09-21</td>
                <td>Pending</td>
                <td>
                    <button class="btn btn-info btn-sm">View</button>
                    <button class="btn btn-danger btn-sm">Cancel</button>
                </td>
            </tr>
          
        </tbody>
    </table>
</div>

    </AdminLayout>       
  )
}

export default Order_list