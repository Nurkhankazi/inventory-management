import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Supplier_Add() {
    
  return (
    <AdminLayout>
          <div class="container mt-5">
    <h2>Add New Supplier</h2>
    <form>
        <div class="mb-3">
            <label for="supplierName" class="form-label">Supplier Name</label>
            <input type="text" class="form-control" id="supplierName" required/>
        </div>

        <div class="mb-3">
            <label for="contactPerson" class="form-label">Contact Person</label>
            <input type="text" class="form-control" id="contactPerson" required/>
        </div>

        <div class="mb-3">
            <label for="phoneNumber" class="form-label">Phone Number</label>
            <input type="tel" class="form-control" id="phoneNumber" required/>
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email" required/>
        </div>

        <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <textarea class="form-control" id="address" rows="3" required></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Add Supplier</button>
    </form>
</div>
    </AdminLayout>       
  )
}

export default Supplier_Add