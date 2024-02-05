import Banner from './Banner'
import Home from './Home'
import Details from './Details'
import logo from '../assets/logo.png'
import '../styles/Layout.css'
import React , {useState } from "react";
import { Route , Routes  } from "react-router-dom";
import {plantList} from "../datas/plantList"



function App() { 
const [plantListA, setplantListA] = useState(plantList)
  return (
   

      <div> 
        <Banner>
            <img src={logo} alt='' className='lmj-logo' />   
            <h3>Cultiver votre bien-être ! </h3>
        </Banner>
        
        <div className='lmj-layout-inner'>   
        <Routes> 
     
            <Route path="/" element={<Home plantList={plantListA} setplantList={setplantListA} />} />
       

            <Route path="/details/:id" element={<Details plantList={plantListA}/>} />
 
        </Routes> 
        </div> 

        {/* <Footer/> */}
        
      </div>
   
     
    )   
  
}

export default App
