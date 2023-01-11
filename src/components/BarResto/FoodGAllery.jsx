import React from 'react'
import food1 from '../../assets/img/bar-resto/food1.jpeg'
import food2 from '../../assets/img/bar-resto/food2.jpeg'
import food3 from '../../assets/img/bar-resto/food3.png'
 
const FoodGAllery = () => {
  return (

    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                <h1 className="mb-3">Our Galley</h1>
                <p>Here are some of the dishes prepared by proffessionals.....Yummy :)</p>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src={food1} alt=""/>
                           
                        </div>
                        {/* <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src={food2} alt=""/>
                           
                        </div>
                        {/* <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src={food3} alt="" />
                           
                        </div>
                        {/* <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Beef Steak</h5>
                            <small>Enjoy Delicious Steak</small>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src={food2} alt="" />
                          
                        </div>
                        {/* <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div> */}
                    </div>
                </div>


                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src={food1} alt=""/>
                           
                        </div>
                        {/* <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src={food2} alt=""/>
                           
                        </div>
                        {/* <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src={food3} alt="" />
                           
                        </div>
                        {/* <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item rounded overflow-hidden">
                        <div className="position-relative">
                            <img className="img-fluid" src={food2} alt="" />
                          
                        </div>
                        {/* <div className="text-center p-4 mt-3">
                            <h5 className="fw-bold mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default FoodGAllery
