import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Callus = () => {
    return (<>
    
    <div className="container mt-5">
        <div className="row">
            <div className="col">
                <h1 className="text-center space-color p-1"style={{color: "#804224"}}> <strong> مرحباً بكم في رَوَاق الشاي </strong></h1>
                <h3><small className="d-flex justify-content-center"style={{backgroundColor: "#804224"}}><span className='text-white'>للأستفسارات أو الطلبات الخاصة بمنتجاتنا, تواصل معنا عبر الأقسام التالية. نحرص على خدمتك وتقديم الأفضل لك دائماً </span> </small></h3>
               
            </div>
        </div>

        <div className="row d-flex justify-content-center mt-5">
            <div className="col">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div className="row">
                            <div className="col">
                                 <Link to="/" className="link">
                                <div className="card ">
                                    <div className="card-header text-black" style={{backgroundColor: "#F5DEB3"}}>
                                        <h1 className="text-center " >الأستفسارات</h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="row ">
                                            <div className="col d-flex justify-content-center">
                                                <FontAwesomeIcon icon="fa-solid fa-comment" size="6x" color="#804224"/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>



                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="row">
                            <div className="col">
                                <Link to="/"className="link">
                                <div className="card card-size">
                                    <div className="card-header  text-black" style={{backgroundColor: "#F5DEB3"}}>
                                        <h1 className="text-center ">خدمة العملاء</h1>
                                    </div>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col d-flex justify-content-center">
                                                <FontAwesomeIcon icon="fa fa-headset " size="6x" color="#804224" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>);

    }

export default Callus;