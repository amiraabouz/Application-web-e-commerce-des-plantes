import '../styles/Panier.css'
import { useState, useEffect } from 'react'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    width:30,
  },
}));

function Panier({ cart, updateCart }) {      //composant Panier est devenu un stateful component / et cart est récupéré en props pour partager notre state en plusieurs composant
 
    const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(             //reduce pour récuperer l'accumulateur 
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
    useEffect(() => {
        document.title = ` `
    }, [total])

    const totalELement = () => {
        if(!cart.length) return 0 
      let total = 0;
      cart.forEach(element => {
         total+= element.amount 
      });
      return total 
    }
    
    return isOpen ? (                            //ajouter un bouton qui ajoute une plante dans le panier
        <div className='lmj-panier'>
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
			{cart.length > 0 ? (
				<div>
					<h2 className='titrep'>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (  //iterer avec map pour afficher le prix et la quantité
							<div className='panier' key={`${name}-${index}`}>
								{name} {price}€ x {amount}
                
							</div>
						))}
					</ul>
					<h3  className='titrep'>Total : {total}€</h3>
                  
					<button className='boutton' onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div className='panier-vide'>Votre panier est vide</div>
			)}
		</div>  

    ) : (
        <div className='lmj-cart-closed'>
        
           <div className='shop' > 
        
           <IconButton aria-label="cart"  >
             <StyledBadge badgeContent={totalELement()} color="secondary"  onClick={() => setIsOpen(true)}>
                  <ShoppingCartIcon sx={{width:50, height:50}} className='lmj-cart-toggle' />
             </StyledBadge>
             </IconButton>
     
         
           </div>
          

        </div>
    )
}


    export default Panier