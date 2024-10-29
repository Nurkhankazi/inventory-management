import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function SalesReturnPay() {
    const {id} = useParams();
    const [inputs, setInputs] = useState({check_date:'',bank_name:'',check_number:''});
    const [salesreturnData, setSalesReuturnData] = useState({check_date:'',bank_name:'',check_number:''});
    const navigate=useNavigate();

    function getDatas(){
        //api from laravel
        axios.get(`${process.env.REACT_APP_API_URL}/salesreturn/${id}`).then(function(response) {
            setSalesReuturnData(response.data.data);
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
        let obj={
            input:inputs
        }
        
        try{
            let apiurl=`/salesreturn/payment/${id}`;//api from laravel
            
            let response= await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: obj
            });
            navigate('/salesreturn');// route from app.js
        } 
        catch(e){
            console.log(e);
        }
    }
    const payType=[
                    {id:1,name:"Cash"},
                    {id:2,name:"Bank"}
                ]

  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-12 order-md-1 order-last">
                        <br/><h1 style={{textAlign: 'center'}}>SalesReturn Payment</h1>
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
                                            <div className='row'> 
                                                <div className="col-6 offset-6 d-flex justify-content-end">
                                                    {salesreturnData.gtotal > 0 &&
                                                        <h3>Due Amount: {salesreturnData.gtotal - salesreturnData.payment_sum_amount}</h3>
                                                    }
                                                </div>
                                            </div>
                                            {/* Payment type */}
                                            <div className='row'> 
                                                <div className='col-sm-6'>
                                                    <div className="form-group">
                                                        <label for="pay_type">Pay Type *</label>
                                                        {payType.length > 0 && 
                                                            <select required className="form-control" id="pay_type" name='pay_type' defaultValue={inputs.pay_type} onChange={handleChange}>
                                                                <option value="">Select Pay Type</option>
                                                                {payType.map((d, key) =>
                                                                    <option value={d.id}>{d.name}</option>
                                                                )}
                                                            </select>
                                                        }
                                                    </div>
                                                </div>
                                                <div className='col-sm-6'>
                                                    <div className="form-group">
                                                        <label for="amount">Amount *</label>
                                                        <input required type="text" id="amount" className="form-control" defultValue={inputs.amount} name="amount" onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'> 
                                                <div className='col-sm-4'>
                                                    <div className="form-group">
                                                        <label for="bank_name">Bank Name</label>
                                                        <input type="text" id="bank_name" className="form-control" defultValue={inputs.bank_name} name="bank_name" onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group">
                                                        <label for="check_number">Check Number</label>
                                                        <input type="text" id="check_number" className="form-control" defultValue={inputs.check_number} name="check_number" onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className='col-sm-4'>
                                                    <div className="form-group">
                                                        <label for="check_date">Check Date</label>
                                                        <input type="date" id="check_date" className="form-control" defultValue={inputs.check_date} name="check_date" onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Payment type */}

                                            <div className='row mt-3'> 
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

export default SalesReturnPay