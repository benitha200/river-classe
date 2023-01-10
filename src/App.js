import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Slider from './components/DriverSupport/Slider';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import BarRestoSlider from './components/BarResto/BarRestoSlider';
import DriverSupport from './components/DriverSupport/DriverSupport';
import Footer from './components/Footer/Footer';
import {useRef} from 'react';

// style

import '../src/assets/css/bootstrap.min.css'

function App() {

  const ref = useRef(null);
  const handleClick = () =>{
    ref.current?.scrollIntoView({behavior:'smooth'});
  };
  return (
    <div className="App">
    

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element= {<DriverSupport ref={ref} handleClick={handleClick}/>}/>
      <Route path="BarResto" element= {<BarRestoSlider/>}/>
      <Route path="Tour" element= {<Slider handleClick={handleClick}/>}/>
      <Route path="Supply" element= {<BarRestoSlider/>}/>  
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
