import CareScale from './CareScale'
import '../styles/PlantItem.css'
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";


function PlantItem({ id,cover, name, water, light, price , isMine , handleDeletePlant}) {
	return (
		<li className='lmj-plant-item' >
			<Grid className='icons'> 
			{ isMine && <ClearIcon className='delete' sx={{ width: '7%' }} onClick={()=>handleDeletePlant(id)} /> } 


			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			</Grid>
			  
		
			<div className='infos'>
			{name}
			<Link to={`/details/${id}`} ><a href="" className='read'>Read More →  </a></Link>
			
			</div>
			
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem