import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function Addproduct() {
    const [inputs, setInputs] = useState({id:'',name:'',description:'',quantity:'',price:'',category_id:''});
    const [category, setCategory] = useState([]);
    const navigate=useNavigate();
    const {id} = useParams();

    const getCategory= async(e) =>{
        axios.get(`${process.env.REACT_APP_API_URL}/category`).then(function(response) {
            setCategory(response.data.data);
        });
    }
    
    function getDatas(){
        //api from laravel
        axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }
    
    useEffect(() => {
        if(id){
            getDatas();
        }
        getCategory();
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
                apiurl=`/product/edit/${inputs.id}`;//api from laravel
            }else{
                apiurl=`/product/create`;//api from laravel
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/products');// route from app.js
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
                        <br/><h3>Add New Product</h3>
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
                                                    <label for="first-name-vertical"> Name</label>
                                                    <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.name} name="name" onChange={handleChange} placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">description</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.description} name="description" onChange={handleChange} placeholder="description"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">quantity</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.quantity} name="quantity" onChange={handleChange} placeholder="quantity"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">price</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.price} name="price" onChange={handleChange} placeholder="price"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="category_id">Category</label>
                                                    {category.length > 0 && 
                                                        <select className="form-control" id="category_id" name='category_id' defaultValue={inputs.category_id} onChange={handleChange}>
                                                            <option value="">Select Category</option>
                                                            {category.map((d, key) =>
                                                                <option value={d.id}>{d.name}</option>
                                                            )}
                                                        </select>
                                                    }
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

export default Addproduct