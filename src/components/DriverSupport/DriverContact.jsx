import React from 'react'
import Book from '../DriverSupport/DriverSupportForm/Book'
import driver1 from '../../assets/img/driver1.jpeg'


const DriverContact = ({ ref }) => {
    return (
        // <!-- Contact Start -->
        <div className="container-xxl py-5" ref={ref}>
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                    <h1 className="mb-3">Book a Driver</h1>
                    <p>Fill in the required information and <b>Pay Using Momo Pay Or Airtel Money</b></p>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                                        <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                                            <i className="fa fa-map-marker-alt text-primary"></i>
                                        </div>
                                        <span> 324V+MM2, Kigali, Rwanda</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                                        <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                                            <i className="fa fa-envelope-open text-primary"></i>
                                        </div>
                                        <span>riverclasse.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                                        <div className="icon me-3" style={{ width: '45px', height: '45px' }}>
                                            <i className="fa fa-envelope-open text-primary"></i>
                                        </div>
                                        <span>+250788888888</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div claclassNamess="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="bg-light rounded p-3">
                                <div className="d-flex align-items-center bg-white rounded p-3" style={{border: '1px dashed rgba(0, 185, 142, .3)'}}>
                                    <div className="icon me-3" style={{width: '45px', height: '45px'}}>
                                        <i className="fa fa-phone-alt text-primary"></i>
                                    </div>
                                    <span>+012 345 6789</span>
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        {/* <iframe className="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" style={{minHeight: '300px' ,border:0}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe> */}

                        {/* <iframe className="position-relative rounded w-100 h-100" src="https://www.openstreetmap.org/export/embed.html?bbox=-1.9954299926757812%2C30.01181179471874%2C-1.894848108291626%2C30.09374620528026&layer=mapnik&marker=-1.94995%2C30.0587"
                            frameborder="0" style={{ minHeight: '300px', border: 0 }} allowFullScreen="" arial-hidden="false"
                            tabindex="0"
                        ></iframe> */}

                        <img src={driver1} alt="" className="position-relative rounded pt-5" style={{width:'100%',height:'92%'}} />
                    </div>


                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Book />
                    </div>

                    {/* <div className="col-md-6">
                    <div className="wow fadeInUp" data-wow-delay="0.5s">
                        {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="text" placeholder="ex:+2507888888"/>
                                        <label for="email">Your Phone Number</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject"/>
                                        <label for="subject">Location</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" value="15,000"/>
                                        <label for="subject">Amount(Rwf)</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    
                                    <div className="form-floating">
        
                                    <select class="form-select border-0 py-3">
                                    <option value="1">Momo Pay</option>
                                    <option value="2">Airtel Money</option>
                    
                                </select>
                                        
                                    </div>
                                </div>
                               
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}
                </div>
            </div>
        </div>

    )
}

export default DriverContact
