import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function User_Add() {
    
  return (
    <AdminLayout>

<div class="container mt-5">
    <h2>Add New User</h2>
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

        <div class="mb-3">
            <label for="userConfirmPassword" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="userConfirmPassword" required/>
        </div>

        <button type="submit" class="btn btn-primary">Add User</button>
    </form>
</div>

</AdminLayout>       
  )
}

export default User_Add