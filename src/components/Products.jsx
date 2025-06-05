import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 


 const Products = () => {
     const[count,setcount]=useState(0)
     const[products,setproducts]=useState([])
     const {category}=useParams()
   
    

    useEffect(()=>{

      fetch('https://fakestoreapi.com/products')
      .then((response)=>response.json())
      .then((data)=>setproducts(data))


    })

     let filter=products.filter((item)=>item.category === category)
    //console.table(products)
    return (
        <>
        {count}
        <button on onClick={()=>setcount(count+1)}>plus</button>
         <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-7">

                    {
                        filter.map((data)=>
                            <div className='card mt-2'>
                                <div className='card-header bg-info'>
                                    {data.title}
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3 ">
                                             <img src={data.image} alt=""  width={150} height={150}/>
                                        </div>
                                        <div className="col">
                                         <ul className='list-group list-group-light'>
                                            <li className="list-group-item border-0"> <span>{data.description}</span></li>
                                            <li className="list-group-item border-0"> <span className='badge bg-danger'>{data.price}</span></li>

                                         </ul>
                                         <div className="row mt-5">
                                            <div className="col">
                                                <Link to={`/details?id=${data.id}`}>
                                                     <button className='btn btn-info'>التفاصيل</button>
                                                </Link>
                                               
                                            </div>
                                         </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>

                        )
                    }

                </div>
            </div>
         </div>
        </>
    );
}
 
export default Products;