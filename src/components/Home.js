import Panier from './Panier'
import ShoppingList from './ShoppingList'
import {useState, useEffect} from 'react'

function Home({plantList, setplantList}){

  const savedCart = localStorage.getItem('cart') //local storage pour sauvgarder le panier à chaque modification
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])  //parse pour analyser la chaine et traite l'objet
	
  useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart)) 
     //cart est objet passé à stringify pour devenir une chaine JSON

	}, [cart])
    
  useEffect(() => {
   localStorage.clear()
    }, [])
    
         return( 
            
            
          <div className='lmj-layout-inner'>  
              <Panier cart={cart} updateCart={updateCart} />            
             <ShoppingList plantList={plantList} setplantList={setplantList} cart={cart} updateCart={updateCart} />
          
          </div>

            
           
         )
}


export default Home