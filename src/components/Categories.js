import '../styles/Categories.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react'
   

function Categories(props){   //props passés en paramétres
const {setActiveCategory, categories,activeCategory} = props

    return(
        <div className='lmj-categories'>
         <FormControl>
         <InputLabel id="demo-simple-select-label">Catégories</InputLabel>
         <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={activeCategory}
      label="Categories"
      onChange={(e) => setActiveCategory(e.target.value)}
      className='lmj-categories-select'
         >
      {categories.map((cat) => (    //il faut de clé avec map() qui est générée ici avec sa valeur unique
					<MenuItem  key={cat} value={cat}>
						{cat}
					</MenuItem>
				))}
      
    </Select>
    
    </FormControl>
    <button className='bouton' onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default Categories