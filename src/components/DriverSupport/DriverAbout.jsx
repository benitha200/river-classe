import React from 'react'
import driver2 from '../../assets/img/driver2.jpeg'

const DriverAbout = () => {
  return (
    <div class="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src={driver2}/> 
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4"> Place To Find Proffesional Drivers</h1>
                        <p className="mb-4">River classe driver support is a company based in Rwanda, that offers Proffessional drivers to drive you anywhere anytime. Don't hesitate to contact us. </p>
                        <p><i className="fa fa-check text-primary me-3"></i>Affordable Price</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Trustworthy Drivers</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Anytime & Anywhere</p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DriverAbout
