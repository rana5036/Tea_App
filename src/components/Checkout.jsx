import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Checkout = () => {
         const[products,setproducts]=useState([]);
        const location=useLocation()

          const queryparams= new URLSearchParams(location.search);
     const id=queryparams.get('id')
      useEffect(()=>{
        
              fetch(`https://fakestoreapi.com/products/${id}`)
              .then((response)=>response.json())
              .then((data)=>setproducts(data))
        
        
            })
    return (
      <div className="container">
        <div className="row mt-5">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">تاكيد الشراء</h3>
                    </div>
                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                              <img src={products.image}  width={400} height={400}  />

                            </div>

                            <div className="col">
                               <h1>{products.title}</h1>
                               <br></br>
                                <small>{products.description}</small>
                                <br></br>
                                <smal>{products.price}</smal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       <div className="row mt-3">
        <div className="col">
              <div className="row ">
            <div className="col">
                total
            </div>
            <div className="col">
                <button className="btn btn-danger">مواصلة الشراء </button>
            </div>
        </div>
        </div>
       </div>
      </div>
    );
}
 
export default Checkout;