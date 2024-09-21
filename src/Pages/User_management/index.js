import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function User_management() {
    
  return (
    <AdminLayout>
        <div class="container mt-5">
    <h2>User Management</h2>
        <div class="mb-4">
        <h4>Add New User</h4>
        <form>
            <div class="mb-3">
                <label for="userName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="userName" required/>
            </div>

            <div class="mb-3">
                <label for="userEmail" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="userEmail" required/>
            </div>

            <div class="mb-3">
                <label for="userRole" class="form-label">Role</label>
                <select class="form-select" id="userRole" required>
                    <option value="" disabled selected>Select a role</option>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                    <option value="manager">Manager</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="userPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="userPassword" required/>
            </div>

            <button type="submit" class="btn btn-primary">Add User</button>
        </form>
    </div>

   
    <h4>User List</h4>
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

export default User_management