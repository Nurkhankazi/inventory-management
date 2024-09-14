import React from 'react';
import { useEffect, useState } from "react";
import AdminLayout from '../../layouts/AdminLayout';
import axios from "axios";

function Roomcategory() {
    const [RoomCategory, setRoomCategory] = useState([]);
    useEffect(() => {
        getDatas();
    }, [RoomCategory]);

    function getDatas() {
        axios.get(`http://localhost/hms_api/room/index_room.php`).then(function(response) {
            setRoomCategory(response.data.data);
            console.log(response.data.status)
        });
    }
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>Room Category</h3>
                    </div>
                    <div className="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" className='breadcrumb-header'>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Table</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="row" id="table-bordered">
            <div className="col-12">
                <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Bordered table</h4>
                </div>
                <div className="card-content">
                    <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                        <thead>
                        <tr>
                            <th>#SL</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>ACTION</th>
                        </tr>
                        </thead>
                        <tbody>
                            {RoomCategory.map((d) =>
                                <tr key={d.id}>
                                    <td>{d.id}</td>
                                    <td>{d.room_cat_name}</td>
                                    <td>{d.status}</td>
                                    <td>
                                        {/* <a href="javascript:void(0)" className="btn btn-primary me-2" onClick={() => getSingleDoctor(d)} >Edit</a>
                                        <a href="javascript:void(0)" className="btn btn-danger btn-xs" onClick={() => deleteUser(d.id)}>Delete</a> */}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>

    </AdminLayout>    
  )
}

export default Roomcategory