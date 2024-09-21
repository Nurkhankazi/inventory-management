import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Stock_Adjustment() {
    
  return (
    <AdminLayout>
        <div class="container mt-5">
    <h2>Inventory Stock Adjustment</h2>
    <form>
        <div class="mb-3">
            <label for="itemSelect" class="form-label">Select Item</label>
            <select class="form-select" id="itemSelect" required>
                <option value="" disabled selected>Select an item</option>
                <option value="item1">Sample Item 1</option>
                <option value="item2">Sample Item 2</option>
                <option value="item3">Sample Item 3</option>
             
            </select>
        </div>

        <div class="mb-3">
            <label for="adjustmentAmount" class="form-label">Adjustment Amount</label>
            <input type="number" class="form-control" id="adjustmentAmount" required/>
            <small class="form-text text-muted">Enter a positive number to increase stock, or a negative number to decrease stock.</small>
        </div>

        <div class="mb-3">
            <label for="adjustmentReason" class="form-label">Adjustment Reason</label>
            <textarea class="form-control" id="adjustmentReason" rows="3" required></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Adjust Stock</button>
    </form>
</div>
    </AdminLayout>       
  )
}

export default Stock_Adjustment