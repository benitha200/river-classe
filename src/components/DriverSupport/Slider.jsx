import Driver from '../../assets/img/driver.jpeg';
import Driver1 from '../../assets/img/driver1.jpeg';

import WOW from 'wowjs';

import React from 'react'

const Slider = ({handleClick}) => {
    // componentDidMount() {
    //     new WOW.WOW({
    //       live: false
    //     }).init();
    //   };
      
    //   useEffect(() => {
    //     new WOW.WOW({
    //       live: false
    //     }).init();
    //   }, [])
  return (
    <div className="container-fluid header bg-white p-0 pt-5"><br/><br/>
    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-6 animated fadeIn mb-4 pt-4">Find A <span class="text-primary">Proffessional Driver</span> To Drive you safe</h1>
            <p className="animated fadeIn mb-4 pb-2">Welcome to River Classe where you can find proffesional drivers anytime anywhere.</p>
            <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn" onClick={handleClick}>Get a Driver</a>
        </div>
        <div className="col-md-6 animated fadeIn">
            <div>
            {/* <div className="owl-carousel header-carousel"> */}
                {/* <div className="owl-carousel-item"> */}
                <div>
                    <img src={Driver} className="img-fluid"  alt=""/>
                </div>
                {/* <div className="owl-carousel-item">
                    <img className="img-fluid" src={Driver1} alt=""/>
                </div> */}
            </div>
        </div>
    </div>
</div>
  )
}

export default Slider