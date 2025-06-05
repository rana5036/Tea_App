import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
const Details = () => {
     const[products,setproducts]=useState([]);
     const location=useLocation()
     const queryparams= new URLSearchParams(location.search);
     const id=queryparams.get('id')
     const dispatch=useDispatch();
     const ShowAlert=()=>
     {
       dispatch({type:'INCREMENT'});
      Swal.fire({
         toast:true,
         position:'top-end',
         title:'success',
         text :'تم الإضافة الى السلة بنجاح',
         icon:"success",
         showConfirmButton:false,
         timer:3000


      });
     }
     useEffect(()=>{
    
          fetch(`https://fakestoreapi.com/products/${id}`)
          .then((response)=>response.json())
          .then((data)=>setproducts(data))
    
    
        })
    return (
    <>
      <div className="container colorbody">
         <div className="row d-flex justify-content-center mt-5">
            <div className="col-sm-8">
             <div className="product-card">
                <div className="row ">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h4><span className="badge bg-success">{products.title}</span></h4>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col">
                                  <img src={products.image}  width={400} height={400}  />
                                </div>
                                <div className="col d-flex justify-content-center align-items-center ">
                                     <ul className="list-inline ">
                                        <li className="list-inline-item"><small>{products.description}</small></li>
                                        <li className="list-inline-item"><strong className="badge bg-danger rounded-pill"> {products.price} </strong>   SAR</li>
                                     </ul>
                                    
                                   
                                </div>
                                <div className="row  mt-3 ">
                                   <div className="col bg-light text-end ">
                                      <button className="btn btn-primary p-3 "   onClick={ShowAlert}   >اضف الى السلة </button>
                                         &nbsp;   <Link to={`/checkout?id=${products.id}`} className="btn btn-danger p-3">
                                                     الشراء الان
                                                </Link>
                                   
                                   </div>
                                   
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            </div>
         </div>

      </div>
    </>
);
}
 
export default Details;