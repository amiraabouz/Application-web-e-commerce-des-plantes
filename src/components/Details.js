import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import '../styles/Details.css'
import CareScale from './CareScale'

const Details = ({plantList}) => {
    let {id} = useParams()
    console.log(id);
    console.log(plantList);

    const plant = plantList.find( item => item.id == id) 
    console.log(plant)

  return (
    <Container > 
        <Grid item xs={8} > 

    <div className='cover-description'>
        <div className='name'>{
           plant.name 
        } :
        </div>

        <img className='cover' src={plant.cover} alt={` cover`} />
         <span className='price'>{plant.price}€</span>
      
                      
       <div className='card'>
           <h2 className='titre-description'> Description :</h2>
             <div className='description'>
             {plant.description }
            </div>
        </div>
    </div>
        
    
   
   
       
  </Grid>
 
    </Container>
    
  
      
    
  )
}

export default Details