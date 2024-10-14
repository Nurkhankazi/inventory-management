import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function PurchaseAdd() {
    const [inputs, setInputs] = useState({id:'',addproduct:'',suppliername:'',quantity:'',price:'',amount:'',date:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        //api from laravel
        axios.get(`${process.env.REACT_APP_API_URL}/purchase/${id}`).then(function(response) {
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
                apiurl=`/purchase/edit/${inputs.id}`;//api from laravel
            }else{
                apiurl=`/purchase/create`;//api from laravel
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/purchase');// route from app.js
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
                        <br/><h3>Add New Purchase</h3>
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
                                                    <label for="addproduct">Add Purchase</label>
                                                    <input type="text" id="addproduct" className="form-control" defaultValue={inputs.addproduct} name="addproduct" onChange={handleChange} placeholder="Add Product"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="suppliername">suppliername</label>
                                                    <input type="text" id="suppliername" className="form-control" defaultValue={inputs.suppliername} name="suppliername" onChange={handleChange} placeholder="suppliername"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="quantity">quantity</label>
                                                    <input type="text" id="quantity" className="form-control" defaultValue={inputs.quantity} name="quantity" onChange={handleChange} placeholder="quantity"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="price">price</label>
                                                    <input type="text" id="price" className="form-control" defaultValue={inputs.price} name="price" onChange={handleChange} placeholder="price"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="amount">amount</label>
                                                    <input type="text" id="amount" className="form-control" defaultValue={inputs.amount} name="amount" onChange={handleChange} placeholder="amount"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="date">date</label>
                                                    <input type="date" id="date" className="form-control" defultValue={inputs.date} name="date" onChange={handleChange} />
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

export default PurchaseAdd