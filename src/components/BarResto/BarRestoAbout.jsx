import React from 'react'
import food from '../../assets/img/bar-resto/food1.jpeg'

const BarRestoAbout = () => {
  return (
    <div class="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src={food}/> 
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">#1 River Classe Restaurant</h1>
                        <p className="mb-4">River Classe Restaurant is a Restaurant located in Rulindo District, River Classe Restaurant is one of the best Restaurants with proffessional chefs.If you want to give an order, Don't hesitate to contact us. </p>
                        <p><i className="fa fa-check text-primary me-3"></i>Delicious Food</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Affordable Price</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Near main Road</p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BarRestoAbout
