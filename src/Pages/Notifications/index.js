import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

function Notifications() {
    
  return (
    <AdminLayout>
        <div class="container mt-5">
    <h2>Notifications</h2>
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div>
                <h5 class="mb-1">Stock Alert: Low Inventory</h5>
                <p class="mb-1">The stock for Sample Item 1 is below the minimum threshold.</p>
                <small>2024-09-21</small>
            </div>
            <span class="badge bg-warning">Unread</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div>
                <h5 class="mb-1">New Supplier Added</h5>
                <p class="mb-1">You have a new supplier: Supplier One.</p>
                <small>2024-09-20</small>
            </div>
            <span class="badge bg-success">Read</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div>
                <h5 class="mb-1">Sales Report Generated</h5>
                <p class="mb-1">The sales report for last month has been generated.</p>
                <small>2024-09-19</small>
            </div>
            <span class="badge bg-success">Read</span>
        </li>
     
    </ul>
</div>
     
    </AdminLayout>       
  )
}

export default Notifications