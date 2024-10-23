import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function SalesReturnAdd() {
    const [inputs, setInputs] = useState({id:'',sales_date:'',customer_id:'',total:'',discount:'',tax:'',gtotal:'',discountamt:'',taxamt:''});
    const [items, setItems] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [cartitems, setCartItems] = useState([]);
    const [totalData, setTotalData] = useState({total:0,discount:0,tax:0,discountAmt:0,taxAmt:0,totalQty:0,finalTotal:0});
    const navigate=useNavigate();
    const {id} = useParams();

    const getProducts= async(e) =>{
        axios.get(`${process.env.REACT_APP_API_URL}/product`).then(function(response) {
            setItems(response.data.data);
        });
    }
    const getCustomer= async(e) =>{
        axios.get(`${process.env.REACT_APP_API_URL}/customer`).then(function(response) {
            setCustomer(response.data.data);
        });
    }
    
      const handleOnSelect = (item) => {
        // the item selected
        setCartItems(val=>[...val,item]);
      }
    
      const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
          </>
        )
      }    
    function getDatas(){
        //api from laravel
        axios.get(`${process.env.REACT_APP_API_URL}/salesreturn/${id}`).then(function(response) {
            setInputs(response.data.data);
        });
    }

    useEffect(() => {
        if(id){
            getDatas();
        }
        getCustomer();
        getProducts();
        handleTotalcal();
    }, [cartitems]);

    const handleCartChange = (event,data) => {
        const name = event.target.name;
        const value = event.target.value;
        let quantity=data.quantity ?? 0;
        if(name=="quantity"){
            quantity=value;
        }
        let price=data.price
        if(name=="price"){
            price=value;
        }
        let subtotal= quantity * price;
        const newdata={...data,['quantity']:quantity,['subtotal']:subtotal,['price']:price}
        
        setCartItems(prevItems=>{
            const itemExists=prevItems.some(item=>item.id===newdata.id);
            if(itemExists){
                return prevItems.map(item=>
                    item.id===newdata.id ? {...item, ...newdata}:item
                );
            }
        })
    }
    const sumTotal = async (key)=>{
        return cartitems.reduce((acc,item)=>{
            let sum=acc+(item[key] || 0);
            if(item.children && Array.isArray(item.children)){
                sum += sumTotal(item.children,key);
            }
            return sum;
        },0);
    }
    const handleTotalChange = async (e)=>{
        let total=await sumTotal('subtotal');
        let totalQty=await sumTotal('quantity');
        const name = e.target.name;
        const value = e.target.value;
        let finalTotal=0;
        let tax=totalData.tax ?? 0;
        if(name=="tax"){
            tax=value;
        }

        let discount=totalData.discount
        if(name=="discount"){
            discount=value;
        }
        let discountAmt= (total * (discount/100));
        finalTotal = total - discountAmt;
        let taxAmt=  (finalTotal * (tax/100));
        finalTotal = finalTotal + taxAmt;

        setTotalData(values => ({...values, ['total']: total, ['discount']: discount, ['tax']: tax, ['discountAmt']: discountAmt, ['taxAmt']: taxAmt, ['totalQty']: totalQty, ['finalTotal']: finalTotal}))
    }

    const handleTotalcal = async ()=>{
        let total=await sumTotal('subtotal');
        let totalQty=await sumTotal('quantity');
        let finalTotal=0;
        let tax=totalData.tax ?? 0;
        let discount=totalData.discount
        let discountAmt= (total * (discount/100));
        finalTotal = total - discountAmt;
        let taxAmt=  (finalTotal * (tax/100));
        finalTotal = finalTotal + taxAmt;
        
        setTotalData(values => ({...values, ['total']: total, ['discount']: discount, ['tax']: tax, ['discountAmt']: discountAmt, ['taxAmt']: taxAmt, ['totalQty']: totalQty, ['finalTotal']: finalTotal}))
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        let obj={
            input:inputs,
            cartitems:cartitems,
            totalData:totalData,
        }
        
        try{
            let apiurl=`/sales/create`;//api from laravel
            
            
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

  return (
    <AdminLayout>
        <div className="main-content container-fluid">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-12 order-md-1 order-last">
                        <br/><h1 style={{textAlign: 'center'}}>Sales Return</h1>
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
                                            <div className="row" style={{ fontWeight: 'bold' }}>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                    <label for="customer_id">Customer</label>
                                                    {customer.length > 0 && 
                                                        <select className="form-control" id="customer_id" name='customer_id' defaultValue={inputs.customer_id} onChange={handleChange}>
                                                            <option value="">Select Customer</option>
                                                            {customer.map((d, key) =>
                                                                <option value={d.id}>{d.name}</option>
                                                            )}
                                                        </select>
                                                    }
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                    <label htmlFor="sales_date">date</label>
                                                    <input type="date" id="sales_date" className="form-control" defultValue={inputs.sales_date} name="sales_date" onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label for="addproduct"> Products</label>
                                                        <ReactSearchAutocomplete
                                                            items={items}
                                                            onSelect={handleOnSelect}
                                                            autoFocus
                                                            formatResult={formatResult}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <table className='mt-3 table table-bordered'>
                                                    <tr style={{ backgroundColor: '#e9ecef', fontWeight: 'bold' }}>
                                                        <td>Name</td>
                                                        <td>Qty</td>
                                                        <td>Price</td>
                                                        <td>Total</td>
                                                    </tr>
                                                    {Object.keys(cartitems).map(k => ({id: k, ...cartitems[k]})).map(d => (
                                                        <tr key={d.id}>
                                                            <td>{d.name}</td>
                                                            <td>
                                                                <input className='form-control' type="text" name="quantity" onChange={(e)=>handleCartChange(e,d)} />
                                                            </td>
                                                            <td>
                                                                <input className='form-control' type="text" name="price" defaultValue={d.price} onChange={(e)=>handleCartChange(e,d)} />
                                                            </td>
                                                            <td>
                                                                {d.subtotal}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </table>
                                            </div>
                                            <div className='row'> 
                                                <div className="col-6 offset-6 d-flex justify-content-end">
                                                    <table className='my-3 table table-bordered' style={{ fontWeight: 'bold' }}>
                                                        <tr>
                                                            <td>Total:</td>
                                                            <td>{totalData.total}</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Discount:</td>
                                                            <td><input className='form-control' type="text" defaultValue={totalData.discount} name="discount" onChange={(e)=>handleTotalChange(e)} /></td>
                                                            <td>{totalData.discountAmt}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tax:</td>
                                                            <td><input className='form-control' type="text" defaultValue={totalData.tax} name="tax" onChange={(e)=>handleTotalChange(e)} /></td>
                                                            <td>{totalData.taxAmt}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Grand Total:</td>
                                                            <td></td>
                                                            <td>{totalData.finalTotal}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className='row'> 
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

export default SalesReturnAdd