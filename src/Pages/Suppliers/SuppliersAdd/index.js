import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Suppliers() {
    const [inputs, setInputs] = useState({id:'',suppliername:'',contactperson:'',phonenumber:'',email:'',address:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        //api from laravel
        axios.get(`${process.env.REACT_APP_API_URL}/suppliers/${id}`).then(function(response) {
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
                apiurl=`/suppliers/edit/${inputs.id}`;//api from laravel
            }else{
                apiurl=`/suppliers/create`;//api from laravel
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/suppliers');// route from app.js
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
                    <div className="col-12 col-md-12 order-md-1 order-last">
                        <br/><h1 style={{textAlign: 'center'}}>Add New Product</h1>
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
                                                    <label for="first-name-vertical"><h4>Supplier Name</h4></label>
                                                    <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.suppliername} name="suppliername" onChange={handleChange} placeholder="Suppliers Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical"><h4>Contact Person</h4></label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.contactperson} name="contactperson" onChange={handleChange} placeholder="contact person"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical"><h4>Phone Number</h4></label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.phonenumber} name="phonenumber" onChange={handleChange} placeholder="phone number"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical"><h4>Email</h4></label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.email} name="email" onChange={handleChange} placeholder="email"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical"><h4>Address</h4></label>
                                                    <input type="text" id="email-id-vertical" rows="3" className="form-control" defaultValue={inputs.address} name="address" onChange={handleChange} placeholder="address"/>
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

export default Suppliers