import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function StockLevels () {
    
  return (
<AdminLayout>
<div class="container mt-5">
    <h2>Current Stock Levels</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Current Stock Level</th>
                <th scope="col">Minimum Stock Level</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sample Item 1</td>
                <td>50</td>
                <td>20</td>
                <td><span class="badge bg-success">In Stock</span></td>
            </tr>
            <tr>
                <td>Sample Item 2</td>
                <td>10</td>
                <td>15</td>
                <td><span class="badge bg-warning">Low Stock</span></td>
            </tr>
            <tr>
                <td>Sample Item 3</td>
                <td>5</td>
                <td>10</td>
                <td><span class="badge bg-danger">Out of Stock</span></td>
            </tr>
            <tr>
                <td>Sample Item 4</td>
                <td>25</td>
                <td>30</td>
                <td><span class="badge bg-success">In Stock</span></td>
            </tr>
        </tbody>
    </table>
</div>
  </AdminLayout>

)
}

export default StockLevels
