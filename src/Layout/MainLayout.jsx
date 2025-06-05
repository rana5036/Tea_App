import React from "react"; 
import myImage from '../images/tea.jpg';
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from "react-redux";

const MainLayout = ({children}) => {
    const counter=useSelector(state=>state.counter)
   
    return (
    <>
        <header>
            <nav className="navbar navbar-app">
                
                <div className="cart mt-12">
    <div className="col d-flex justify-content-center">
       <FontAwesomeIcon icon="fa fa-shopping-cart " size="2x" color="white" />
       <span className=" rounded-pill position-absolute top-2 translate-bottom">{counter}</span>
   </div>
 </div>
                <div class="container">
                    
                      <ul class="list-inline">
                            <li class="list-inline-item p-1"><Link to="/callus" className="link"><h3><span style={{color: "#A0522D"}}> اتصل بنا</span></h3></Link></li>
                            <li class="list-inline-item p-1"><Link to="/benefits" className="link"><h3><span style={{color: "#A0522D"}}>الفوائد</span></h3></Link></li>
                            <li class="list-inline-item p-1"><Link to="/products" className="link"><h3><span style={{color: "#A0522D"}}>المنتجات</span></h3></Link></li>
                            <li class="list-inline-item p-1"><Link to="/" className="link"><h3><span style={{color: "#A0522D"}}>الصفحة الرئيسية</span></h3></Link></li>
                        
                        </ul>
                        
                         <div className="cart ">
                                <div className="col">
                                  <h1 style={{color: "#804224"}}> متجر رَوَاق الشاي</h1>
                                </div>
                        </div>
                
                       
                </div>
                       
                        
               
            </nav>
        </header>

        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {children}
                        
                    </div>
                   
                </div>
            </div>
        </main>

        
            
      
        <footer className="bg-body-tertiary text-center text-lg-start fixed-bottom">
            <div className="text-center footer-color ">
                     © 2025 RANA | إتمام مشروع معسكر طويق
                
           </div>
       </footer>
   </>    
    );
}

export default MainLayout;