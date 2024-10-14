import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function CustomerAdd() {
    const [inputs, setInputs] = useState({id:'',name:'',description:'',quantity:'',price:'',category:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        //api from laravel
        axios.get(`${process.env.REACT_APP_API_URL}/customer/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(inputs)
        
        try{
            let apiurl='';
            if(inputs.id!=''){
                apiurl=`/customer/edit/${inputs.id}`;//api from laravel
            }else{
                apiurl=`/customer/create`;//api from laravel
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/customer');// route from app.js
        } 
        catch(e){
            console.log(e);
        }
    }
  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <br/><h3>Add New Customer</h3>
                    </div>
                   
                </div>
            </div>

            <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical" onSubmit={handleSubmit}>
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="name"> Name</label>
                                                    <input type="text" id="name" className="form-control" defaultValue={inputs.name} name="name" onChange={handleChange} placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="text" id="email" className="form-control" defaultValue={inputs.email} name="email" onChange={handleChange} placeholder="email"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="number">Phone Number</label>
                                                    <input type="text" id="number" className="form-control" defaultValue={inputs.number} name="number" onChange={handleChange} placeholder="number"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="address">Address</label>
                                                    <input type="text" id="address" className="form-control" defaultValue={inputs.address} name="address" onChange={handleChange} placeholder="address"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="gender">Gender</label>
                                                    <select id="gender" className="form-control" defaultValue={inputs.gender} name="gender" onChange={handleChange}>
                                                        <option value="">Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="birth">Date of Birth</label>
                                                    <input type="date" id="birth" className="form-control" defultValue={inputs.birth} name="birth" onChange={handleChange} />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="type">Customer Type:</label>
                                                    <select id="type" className="form-control" defaultValue={inputs.type} name="type" onChange={handleChange}>
                                                        <option value="">Select Type</option>
                                                        <option value="Regular">Regular</option>
                                                        <option value="VIP">VIP</option>
                                                        <option value="Wholesale">Wholesale</option>
                                                    </select>
                                                    </div>
                                                </div>
                                                
                                                
                                                <div className="col-12 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary mr-1 mb-1">Submit</button>
                                                    <button type="reset" className="btn btn-light-secondary mr-1 mb-1">Reset</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </AdminLayout>    
  )
}

export default CustomerAdd