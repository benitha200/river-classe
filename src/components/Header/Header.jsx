import React from 'react'
import '../../assets/lib/animate/animate.min.css'
import '../../assets/lib/owlcarousel/assets/owl.carousel.min.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/style.css'
import { Outlet , Link } from 'react-router-dom'
import logo1 from '../../assets/img/logo1.png'

const Header = () => {
    return (
        <div>
            <div className="container-xxl bg-white p-0">
                {/* <!-- Spinner Start --> */}
                {/* <div id="spinner" className='show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center'>
                    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> */}
                {/* <!-- Spinner End --> */}


                {/* <!-- Navbar Start --> */}
                <div className="container-fluid nav-bar bg-transparent">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                        <Link to ="/" className="navbar-brand d-flex align-items-center text-center">
                            <div className="">
                                <img className="img-fluid" src={logo1} alt="Icon" style={{width: '75px', height: '75px', borderRadius:'50%'}}/>
                            </div>
                            <div style={{display:'block'}}>
                                <h2 className="m-0 pt-3 text-primary p-1">River Classe</h2><span className="m-0 " style={{color:'#0E2E50',fontWeight:'700',marginTop:'0px',fontSize:'0.9rem'}}> Group Ltd</span>
                            </div>
                            
                        </Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto">

                                <Link to="/" className="nav-item nav-link active">Driver Support</Link>
                                <Link to="/BarResto" className="nav-item nav-link">Bar&Resto</Link>
                                <Link to="/Tour" className="nav-item nav-link">Tour</Link>
                                <Link to="/Supply" className="nav-item nav-link">Supply</Link>
                                {/* <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <a href="property-list.html" class="dropdown-item">Property List</a>
                                        <a href="property-type.html" class="dropdown-item">Property Type</a>
                                        <a href="property-agent.html" class="dropdown-item">Property Agent</a>
                                    </div>
                                </div> */}
                                {/* <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="404.html" className="dropdown-item">404 Error</a>
                                    </div>
                                </div> */}
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            {/* <a href="" class="btn btn-primary px-3 d-none d-lg-flex">Add Property</a> */}
                        </div>
                    </nav>
                    <Outlet/>
                </div>
                {/* <!-- Navbar End --> */}

            </div>
            </div>
            )
}

            export default Header
