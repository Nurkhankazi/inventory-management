import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function User_management() {
    
  return (
    <AdminLayout>
        <div class="container mt-5">
    <h2 style={{textAlign: 'center'}}>Purchase Add</h2>
        <div class="mb-4">
        <h4>Purchase Add</h4>
        <form>
            <div class="mb-3">
                <label for="product" class="form-label">Product</label>
                <select class="form-select" id="product" required>
                    <option value="" disabled selected>Select a Product</option>
                    <option value="admin">Porduct 101</option>
                    <option value="admin">Porduct 102</option>
                    <option value="admin">Porduct 103</option>
                    
                </select>
            </div>
            <div class="mb-3">
                <label for="supplier" class="form-label">Supplier</label>
                <select class="form-select" id="supplier" required>
                    <option value="" disabled selected>Select a Supplier</option>
                    <option value="admin">Bismillah Enterprize</option>
                    
                </select>
            </div>

            <div class="mb-3">
                <label for="qty" class="form-label">qty</label>
                <input type="text" class="form-control" id="qty" required/>
            </div>

            <div class="mb-3">
                <label for="userEmail" class="form-label">Price</label>
                <input type="text" class="form-control" id="userEmail" required/>
            </div>

            <div class="mb-3">
                <label for="userEmail" class="form-label">Amount</label>
                <input type="text" class="form-control" id="userEmail" required/>
            </div>

            <div class="mb-3">
                <label for="userEmail" class="form-label">Dtate</label>
                <input type="text" class="form-control" id="userEmail" required/>
            </div>

            <button type="submit" class="btn btn-primary">Save</button>
        </form>
    </div>

   
    
           
        
    
</div>
     
    </AdminLayout>       
  )
}

export default User_management