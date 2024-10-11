// src/InventoryManager.js

import React, { useState } from 'react';

const InventoryManager = () => {
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [action, setAction] = useState('add'); // 'add' or 'remove'

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingItem = inventory.find(item => item.name === itemName);

    if (action === 'add') {
      if (existingItem) {
        setInventory(inventory.map(item =>
          item.name === itemName
            ? { ...item, quantity: item.quantity + itemQuantity }
            : item
        ));
      } else {
        setInventory([...inventory, { name: itemName, quantity: itemQuantity }]);
      }
    } else if (action === 'remove') {
      if (existingItem) {
        if (existingItem.quantity > itemQuantity) {
          setInventory(inventory.map(item =>
            item.name === itemName
              ? { ...item, quantity: item.quantity - itemQuantity }
              : item
          ));
        } else {
          setInventory(inventory.filter(item => item.name !== itemName));
        }
      }
    }

    // Reset form fields
    setItemName('');
    setItemQuantity(1);
  };

  return (
    <div className="container mt-5">
      <h2>Inventory Management</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">Item Name</label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itemQuantity" className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="itemQuantity"
            min="1"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(parseInt(e.target.value))}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="action" className="form-label">Action</label>
          <select
            className="form-select"
            id="action"
            value={action}
            onChange={(e) => setAction(e.target.value)}
          >
            <option value="add">Add Stock</option>
            <option value="remove">Remove Stock</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <h2>Current Inventory</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Item Name</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManager;
