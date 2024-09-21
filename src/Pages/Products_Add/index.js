import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Products_Add() {
    
  return (
    <AdminLayout>
         <div><br/>
         <h2 className="panel-title" style={{textAlign:'center'}}>Products Add</h2>
          <form >
            <div class="mb-3">
                <label for="Product_Name" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="Product_Name" required/>
            </div>

            <div class="mb-3">
                <label for="itemDescription" class="form-label">Description</label>
                <textarea class="form-control" id="itemDescription" rows="3" required></textarea>
            </div>

            <div class="mb-3">
                <label for="itemQuantity" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="itemQuantity" required/>
            </div>

            <div class="mb-3">
                <label for="itemPrice" class="form-label">Price</label>
                <input type="number" class="form-control" id="itemPrice" step="0.01" required/>
            </div>

            <div class="mb-3">
                <label for="itemCategory" class="form-label">Category</label>
                <select class="form-select" id="itemCategory" required>
                    <option value="" disabled selected>Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    
                </select>
            </div>

            <button type="submit" class="btn btn-primary">Add Item</button>
          </form>
         </div>
    </AdminLayout>       
  )
}

export default Products_Add