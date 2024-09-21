import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Supplier_View() {
    
  return (
    <AdminLayout>
          <div class="container mt-5">
    <h2>Suppliers List</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Contact Person</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Supplier One</td>
                <td>John Doe</td>
                <td>(123) 456-7890</td>
                <td>john@example.com</td>
                <td>
                    <button class="btn btn-warning btn-sm">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Supplier Two</td>
                <td>Jane Smith</td>
                <td>(987) 654-3210</td>
                <td>jane@example.com</td>
                <td>
                    <button class="btn btn-warning btn-sm">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
          
        </tbody>
    </table>
</div>
    </AdminLayout>       
  )
}

export default Supplier_View