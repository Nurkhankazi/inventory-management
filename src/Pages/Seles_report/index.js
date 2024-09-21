import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Seles_report() {
    
  return (
    <AdminLayout>
      <div class="container mt-5">
    <h2>Sales Report</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity Sold</th>
                <th scope="col">Sale Date</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1001</td>
                <td>Sample Item 1</td>
                <td>3</td>
                <td>2024-09-20</td>
                <td>$59.97</td>
                <td><span class="badge bg-success">Completed</span></td>
            </tr>
            <tr>
                <td>1002</td>
                <td>Sample Item 2</td>
                <td>5</td>
                <td>2024-09-21</td>
                <td>$99.95</td>
                <td><span class="badge bg-success">Completed</span></td>
            </tr>
            <tr>
                <td>1003</td>
                <td>Sample Item 3</td>
                <td>2</td>
                <td>2024-09-22</td>
                <td>$39.98</td>
                <td><span class="badge bg-warning">Pending</span></td>
            </tr>
       
        </tbody>
    </table>
</div>
    </AdminLayout>       
  )
}

export default Seles_report