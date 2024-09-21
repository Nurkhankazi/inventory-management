import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function User_list() {
    
  return (
    <AdminLayout>

<div class="container mt-5">
    <h2>User List</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Admin</td>
                <td>
                    <button class="btn btn-warning btn-sm">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>Staff</td>
                <td>
                    <button class="btn btn-warning btn-sm">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Michael Brown</td>
                <td>michael@example.com</td>
                <td>Manager</td>
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

export default User_list