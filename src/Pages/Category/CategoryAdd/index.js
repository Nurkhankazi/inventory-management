import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function OrderAdd() {
    const [inputs, setInputs] = useState({id:'',orderitem:'',orderquantity:'',orderprice:'',ordernotes:'',orderdate:''});
    const navigate=useNavigate();
    const {id} = useParams();
    
    function getDatas(){
        //api from laravel
        axios.get(`${process.env.REACT_APP_API_URL}/order/${id}`).then(function(response) {
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
                apiurl=`/order/edit/${inputs.id}`;//api from laravel
            }else{
                apiurl=`/order/create`;//api from laravel
            }
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/order');// route from app.js
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
                        <br/><h3>New Order</h3>
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
                                                    <label for="first-name-vertical">Order item</label>
                                                    <input type="text" id="first-name-vertical" className="form-control" defaultValue={inputs.orderitem} name="orderitem" onChange={handleChange} placeholder="orderitem"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Order quantity</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.orderquantity} name="orderquantity" onChange={handleChange} placeholder="orderquantity"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="email-id-vertical">Order price</label>
                                                    <input type="text" id="email-id-vertical" className="form-control" defaultValue={inputs.orderprice} name="orderprice" onChange={handleChange} placeholder="orderprice"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label for="ordernotes">Order notes</label>
                                                    <input type="text" id="ordernotes" className="form-control" defaultValue={inputs.ordernotes} name="ordernotes" onChange={handleChange} placeholder="ordernotes"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                    <label htmlFor="orderdate">Order date</label>
                                                    <input type="date" id="orderdate" className="form-control" defultValue={inputs.orderdate} name="orderdate" onChange={handleChange} />
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

export default OrderAdd