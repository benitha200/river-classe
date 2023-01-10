import React from 'react'
import IconVilla from '../../assets/img/icon-villa.png'

const DriverWhySection = () => {
    return (
    // <!-- Category Start -->
    <div className='container-xxl py-5'>
        <div className='container'>
            <div className='text-center mx-auto mb-5 wow fadeInUp' data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className='mb-3'>Why Choose Us?</h1>
                {/* <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p> */}
            </div>
            <div className='row g-4'>
                <div className='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay="0.1s">
                    <a className='cat-item d-block bg-light text-center rounded p-3' href="">
                        <div className='rounded p-4'>
                            <div className='icon mb-3'>
                                <img className='img-fluid' src={IconVilla} alt="Icon"/>
                            </div>
                            <h6>Proffesional Drivers</h6>
                        </div>
                    </a>
                </div>

                <div className='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay="0.1s">
                    <a className='cat-item d-block bg-light text-center rounded p-3' href="">
                        <div className='rounded p-4'>
                            <div className='icon mb-3'>
                                <img className='img-fluid' src={IconVilla} alt="Icon"/>
                            </div>
                            <h6>Safety</h6>
                        </div>
                    </a>
                </div>

                <div className='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay="0.1s">
                    <a className='cat-item d-block bg-light text-center rounded p-3' href="">
                        <div className='rounded p-4'>
                            <div className='icon mb-3'>
                                <img className='img-fluid' src={IconVilla} alt="Icon"/>
                            </div>
                            <h6>Affordable Price</h6>
                        </div>
                    </a>
                </div>
                <div className='col-lg-3 col-sm-6 wow fadeInUp' data-wow-delay="0.1s">
                    <a className='cat-item d-block bg-light text-center rounded p-3' href="">
                        <div className='rounded p-4'>
                            <div className='icon mb-3'>
                                <img className='img-fluid' src={IconVilla} alt="Icon"/>
                            </div>
                            <h6>Available all the time</h6>
                        </div>
                    </a>
                </div>
       
       
       
              
            </div>
        </div>
    </div>

  )
}

export default DriverWhySection
