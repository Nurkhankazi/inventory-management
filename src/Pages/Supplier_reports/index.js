import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Supplier_reports() {
    
  return (
    <AdminLayout>
        <div class="container mt-5">
    <h2>Supplier Reports</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Supplier Name</th>
                <th scope="col">Contact Person</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Total Supplies Provided</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Supplier One</td>
                <td>John Doe</td>
                <td>(123) 456-7890</td>
                <td>john@example.com</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Supplier Two</td>
                <td>Jane Smith</td>
                <td>(987) 654-3210</td>
                <td>jane@example.com</td>
                <td>200</td>
            </tr>
            <tr>
                <td>Supplier Three</td>
                <td>Michael Brown</td>
                <td>(555) 123-4567</td>
                <td>michael@example.com</td>
                <td>100</td>
            </tr>
         
        </tbody>
    </table>
</div>
    </AdminLayout>       
  )
}

export default Supplier_reports