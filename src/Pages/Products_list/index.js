import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Products_list() {
    
  return (
    <AdminLayout>
      
      <div class="container mt-5">
    <h2>Products_list</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">SL</th>
                <th scope="col">Product Name</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Computer</td>
                <td>This is a sample description for item.</td>
                <td>10</td>
                <td>$2000.99</td>
                <td>Electronics</td>
                <td>
                    <button class="btn btn-warning btn-sm">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>EXECUTIVE TABLE</td>
                <td>Beech wood and veneered engineered wood.</td>
                <td>5</td>
                <td>$1500.99</td>
                <td>Furniture</td>
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

export default Products_list