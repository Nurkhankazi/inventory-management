import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Order_Add() {
    
  return (
    <AdminLayout>
          <h2>Create New Order</h2>
    <form>
        <div class="mb-3">
            <label for="orderItem" class="form-label">Select Item</label>
            <select class="form-select" id="orderItem" required>
                <option value="" disabled selected>Select an item</option>
                <option value="item1">Sample Item 1</option>
                <option value="item2">Sample Item 2</option>
                <option value="item3">Sample Item 3</option>
                
            </select>
        </div>

        <div class="mb-3">
            <label for="orderQuantity" class="form-label">Quantity</label>
            <input type="number" class="form-control" id="orderQuantity" min="1" required/>
        </div>

        <div class="mb-3">
            <label for="orderPrice" class="form-label">Price</label>
            <input type="number" class="form-control" id="orderPrice" min="1" required/>
        </div>

        <div class="mb-3">
            <label for="orderNotes" class="form-label">Additional Notes</label>
            <textarea class="form-control" id="orderNotes" rows="3"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Create Order</button>
    </form>
    </AdminLayout>       
  )
}

export default Order_Add