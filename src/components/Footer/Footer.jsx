import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn' data-wow-delay="0.1s">
    <div className='container py-5'>
        <div className='row g-5'>
            <div className='col-lg-3 col-md-6'>
                <h5 className="text-white mb-4">Get In Touch</h5>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Kigali, Nyabugogo</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+250785283918</p>
                <p className="mb-2"><i className="fa fa-envelope me-3"></i>riverclasse@gmail.com</p>
                <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h5 className="text-white mb-4">Quick Links</h5>
                <a className="btn btn-link text-white-50" href="">About Us</a>
                <a className="btn btn-link text-white-50" href="">Contact Us</a>
                <a className="btn btn-link text-white-50" href="">Our Services</a>
                <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
                <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
            </div>
            {/* <div class="col-lg-3 col-md-6">
                <h5 class="text-white mb-4">Photo Gallery</h5>
                <div class="row g-2 pt-2">
                    <div class="col-4">
                        <img class="img-fluid rounded bg-light p-1" src="img/property-1.jpg" alt="">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded bg-light p-1" src="img/property-2.jpg" alt="">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded bg-light p-1" src="img/property-3.jpg" alt="">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded bg-light p-1" src="img/property-4.jpg" alt="">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded bg-light p-1" src="img/property-5.jpg" alt="">
                    </div>
                    <div class="col-4">
                        <img class="img-fluid rounded bg-light p-1" src="img/property-6.jpg" alt="">
                    </div>
                </div>
            </div> */}
            <div className="col-lg-6 col-md-6">
                <h5 className="text-white mb-4">Contact us</h5>
                <p>How Was Your Experience!</p>
                <div className="mx-auto mt-2" style={{maxWidth: 'auto',display:'block'}}>
                    <form>
                    <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/><br></br>
                    <textarea className='form-control bg-transparent w-100 py-3 ps-4 pe-5' placeholder='Message...'></textarea>
                    <button type="button" class="btn btn-primary w-50 top-0 end-0 mt-2 me-2">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="copyright">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a class="border-bottom" href="#">River Classe</a>, All Right Reserved. 
                    
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <div class="footer-menu">
                        <a href="">Home</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer
