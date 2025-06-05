
import mage from '../images/tea4.jpg';
import React from 'react';
import "./Landing.css";
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
      <div className="container-banner">
         <div className="row mt-5">
            <div className="col">
               <div className="card card img">
                  <img src={mage} alt="شاي"  />
               </div>
            </div>
            
            <div className="col "style={{backgroundColor: "#F5DEB3"}}>
              <h3 className="d-flex justify-content-end"style={{display: 'flex', alignItems: 'center', height: '40%', color: "#804224"}}> <strong> كل ورقة شاي تحكي حكاية..  ورواق الشاي يجمع لك أفضل القصص في كل رشفة</strong></h3>
                     <h3><small className="d-flex justify-content-center"style={{backgroundColor: "#804224"}}><span className='text-white'>استكشف تشكيلتنا من أجود أنواع الشاي</span> </small></h3>
                            <div className="col d-flex justify-content-center">
                                <Link to="/products">
                                  <button style={{backgroundColor: "#C4B28F", color: "#804224"}} >تسوق الآن</button>
                                </Link>
                            </div>
            </div>
         </div>
      </div>
  );
}

export default Landing;