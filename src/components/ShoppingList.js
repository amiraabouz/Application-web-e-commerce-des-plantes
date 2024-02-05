
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import InputAdornment from '@mui/material/InputAdornment';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import TextareaAutosize from '@mui/material/TextareaAutosize';



Modal.setAppElement("#root");
function ShoppingList({ cart, updateCart, plantList, setplantList }) {
    const [plantListToshow, setplantListToshow] = useState(plantList)
    const [activeCategory, setActiveCategory] = useState('')
    const [activeName, setActiveName] = useState('')
    const [ isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    
    setplantListToshow(plantList)
    }, [plantList])
    
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const [plantToAdd, setPlantToAdd] = useState({
        name: '',
        category: '',
        description:'',
        price: '',
        water: '',
        light: '',
        cover: '',
        isMine: true
    })

    const [validation, setValidation] = useState({
        name: true,
        category: true,
        description:true,
        price: true,
        water: true,
        light: true,
        cover: true
    })
    const handleDeletePlant = (id) => {

         let deletePlantList =[...plantListToshow]
            const indexOfCurrentPlantToDelete=plantListToshow.map(el => el.id).indexOf(id)
			deletePlantList.splice(indexOfCurrentPlantToDelete,1)

        setplantList(deletePlantList)
    }


    const urlPatternValidation = URL => {
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        return regex.test(URL);
    };

    const setValidationInputs = () => {
        setValidation({
            name: plantToAdd.name.length > 0,
            description: plantToAdd.description.length > 0,
            category: plantToAdd.category.length > 0,
            price: Number(plantToAdd.price) > 0,
            water: Number(plantToAdd.water) > 0 && (Number(plantToAdd.water) < 4),
            light:  (Number(plantToAdd.light) < 4) && (Number(plantToAdd.light) > 0),
            cover: urlPatternValidation(plantToAdd.cover)
        })
        debugger
        if ((plantToAdd.name.length > 0) &&(plantToAdd.description.length > 0) && (Number(plantToAdd.water) < 4) && (Number(plantToAdd.water) > 0) &&
            (Number(plantToAdd.light) < 4) && (Number(plantToAdd.light) > 0) && (Number(plantToAdd.price) > 0) && (urlPatternValidation(plantToAdd.cover))) {

            return true
        }

        return false
    }
   
    const [open, setOpen] = React.useState(true);
    const [alert, setAlert] = useState(false);
    const handleAddPlant = () => {

        if (setValidationInputs()) {
            let updatePlantList =[...plantListToshow]
            if ( plantToAdd.id) {
                const indexOfCurrentPlantToUpdate=plantListToshow.map(el => el.id).indexOf(plantToAdd.id)
           
                updatePlantList[indexOfCurrentPlantToUpdate]=plantToAdd
                setplantListToshow(updatePlantList)
                setplantList(updatePlantList)
            }else{
                const newPlante = {
                    ...plantToAdd,
                    id: new Date().getTime().toString()
                }
                setplantList([newPlante, ...updatePlantList])
            }
      
           
            
            setPlantToAdd({
                name: '',
                category: '',
                description:'',
                price: '',
                water: '',
                light: '',
                cover: '',
                isMine : true
            })
            toggleModal()
            setAlert(true)

        } 

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        !validation[name] && value.trim().length && setValidation({
            ...validation,
            [name]:true
        })

        setPlantToAdd({
            ...plantToAdd,
            [name]: value
        })

    }


    const names = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.name) ? acc : acc.concat(plant.name),
        []
    )

    const categories = plantList.reduce(        // reduce :créer une liste d'éléments uniques d'une maniére dynamique
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )


    function addToCart(name, price, count) {    //la fonction vérifie dans notre liste d'objets que la plante présente dans le panier déja ou non avec la methode find
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {            // si elle existe on crée un nouveau tab sans elle avec filter et on rajoute à la quantité précédente 1 
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])

        } else {                    // sinon on récupére le cart déja existant avec spread opérateur et on ajoute l'objet et sa quantité=1
            updateCart([...cart, { name, price, amount: 1 }])

        }
    }


console.log(plantListToshow);
    return (

        <div className='lmj-shopping-list'>

            <div className='lmj-input'>
                <div className='lmj-search'>
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Rechercher</InputLabel>
                        <OutlinedInput
                            style={{
                                height: 50                                          //barre de recherche
                            }}
                            placeholder="&#xf002;  Search plant ..."
                            aria-label="Search" name="activeName"
                            id="component-outlined"
                            value={activeName}
                            onChange={(e) => setActiveName(e.target.value)}
                            label="Name"
                        />
                    </FormControl>
                </div>


                <Categories
                    categories={categories}
                    setActiveCategory={setActiveCategory}
                    activeCategory={activeCategory}
                />
                <div className='ajouter'>Ajouter</div>
                <Icon className='lmj-add' onClick={toggleModal} sx={{ color: green[500] }}>add_circle</Icon>
                
            </div>

       
                            


            <ul className='lmj-plant-list'>
                {plantListToshow.filter(el => el.name.toLocaleLowerCase().trim().includes(activeName.toLocaleLowerCase().trim())).map(({ id, cover, name, water, light, price, category,isMine,description }) =>   //dexieme ul pour la liste des plantes à vendre avec un bouton ajouter pour le mise à jour de state 

                    !activeCategory || activeCategory === category ? (
                        <div  key={id}>
                            
                            <PlantItem key={id} cover={cover}  name={name} water={water} light={light} price={price} isMine={isMine}  id={id}  handleDeletePlant={handleDeletePlant} />
                          
                            <button className='boutton' onClick={() => addToCart(name, price)}>Acheter</button>
                         
                            {
                                isMine &&  <button className='boutton-edit'onClick={() => {
                                    setIsOpen(true)
                                    setPlantToAdd({
                                        id,
                                        isMine,
                                        description,
                                        name, 
                                        cover,
                                        water,
                                        light,
                                        price,
                                        category
                                    })
                            
                                }}>Edit</button>  
                      
                                
                     
                            }
                            		
                            </div>
                          
                            
                      
                    ) : null
                )}

            </ul>

         

            {alert ?
                <Collapse in={open}>
                    <Snackbar open={open} autoHideDuration={6000} sx={{ width: '100%' }}>
                        <Alert action={
                            <IconButton
                                aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false); }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                            //  autoHideDuration={6000}
                            sx={{ mb: 2, width: '20%' }}
                        >
                            Added Successfully — <strong>check it out!</strong>
                        </Alert>
                    </Snackbar>

                </Collapse>

                : <></>}
                
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
            >

                <Container maxWidth="sm">
                    <div className='lmj-titre'>{ plantToAdd.id ? "Modifier la plante": "Ajouter une plante "}</div>

                    <Grid item xs={8}>
                        <div className='inputs'>

                            <div className='add'  >
                                <div className='titre'> Nom de la plante : </div>
                                <FormControl >
                                    <InputLabel htmlFor="outlined-required">Name</InputLabel>
                                    <OutlinedInput error={!validation.name} required
                                        placeholder="&#xf002;  Add plant ..."
                                        aria-label="Text"
                                        name="name"
                                        id="outlined-required"
                                        value={plantToAdd.name}
                                        onChange={handleInputChange}
                                        label="Required"

                                    />
                                    {
                                        !validation.name && <div className='error'> Required Field </div>
                                    }
                                </FormControl>
                            </div>

                            <div className='add'>
                            <div className='titre'> Description : </div>
                            <TextareaAutosize error={!validation.description} required
                            aria-label="minimum height"
                            name="description"
                             minRows={3}
                             value={plantToAdd.description}
                             onChange={handleInputChange}
                          placeholder="&#xf002;  Add Description ..."
                        //   style={{ width: 200 }}
                             />
                                    {
                                        !validation.description && <div className='error'> Required Field </div>
                                    }

                            </div>


                            <div className='add' >
                                <div className='titre'> Catégorie de la plante : </div>
                                <FormControl>
                                    <InputLabel htmlFor="component-outlined">Category</InputLabel>
                                    <Select required
                                        id="demo-simple-select"
                                        value={activeCategory} 
                                        error={!validation.category}
                                        label="Categories"
                                        placeholder="&#xf002;  Enter category..."
                                        aria-label="Text"
                                        name="category"
                                        value={plantToAdd.category}
                                        onChange={handleInputChange}
                                    >
                                      
                                        {categories.map((cat) => (
                                            <MenuItem key={cat} value={cat}>
                                                {cat}
                                            </MenuItem>
                                        ))}

                                    </Select>

                                    {
                                        !validation.category && <div className='error'> Required Field </div>
                                          } 
                                </FormControl>
                            </div>

                            <div className='add'>
                                <div className='titre'> Quantité de lumière nécessaire  : </div>
                                <FormControl>
                                    <InputLabel htmlFor="component-outlined">Light</InputLabel>
                                    <OutlinedInput required type="number"
                                        placeholder="&#xf002;  Light..."
                                        aria-label="Text" name="light"
                                        error={!validation.light}
                                        id="component-outlined"
                                        value={plantToAdd.light}
                                        onChange={handleInputChange}
                                        label="Name"
                                    />
                                    {
                                    !validation.light && <div className='error'> Entrer un nombre compris entre 1 et 3!</div>
                                     } 
                                </FormControl>
                            </div>

                            <div className='add'>
                                <div className='titre'> Quantité d'eau nécessiare : </div>
                                <FormControl>
                                    <InputLabel htmlFor="component-outlined">Water</InputLabel>

                                    <OutlinedInput type='number'
                                        required
                                        placeholder="&#xf002;  Water..."
                                        aria-label="Text" name="water"
                                        id="component-outlined"
                                        error={!validation.water}
                                        value={plantToAdd.water}
                                        onChange={handleInputChange}
                                        label="Name"
                                    />
                                    {
                                        !validation.water && <div className='error'> Entrer un nombre compris entre 1 et 3!  </div>
                                          } 
                                </FormControl>
                            </div>

                            <div className='add'>
                                <div className='titre'> Couverture de la plante: </div>
                                <FormControl>
                                    <InputLabel htmlFor="component-outlined">Cover</InputLabel>
                                    <OutlinedInput required
                                        placeholder="&#xf002;  Enter URL..."
                                        aria-label="Text" name="cover"
                                        id="standard-error-helper-text"
                                        value={plantToAdd.cover}
                                        error={!validation.cover}
                                        onChange={handleInputChange}
                                        label="Name"
                                    />
                                    {
                                        !validation.cover && <div className='error'> URL invalide! </div>
                                          } 
                                </FormControl>
                            </div>

                            <div className='add'>
                                <div className='titre'> Prix de la plante: </div>
                                <FormControl >
                                    <InputLabel htmlFor="filled-adornment-amount"></InputLabel>
                                    <OutlinedInput type="number" required
                                        placeholder="&#xf002;  Enter price..."
                                        aria-label="Text" name="price"
                                        value={plantToAdd.price}
                                        onChange={handleInputChange}
                                        error={!validation.price}
                                        id="filled-adornment-amount"
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    />
                                    {
                                        !validation.price && <div className='error'> Required Field </div>
                                          } 
                                </FormControl>
                            </div>
                        </div>

                        <div className='boutons'>
                            <button className='lmj-ajout' onClick={handleAddPlant} >{ plantToAdd.id ? 'Update ': 'Add '}</button>
                            <button className='lmj-close' onClick={toggleModal} > Close </button>
                        </div>
                    </Grid>
                </Container>
            </Modal>



        </div>



    )

}

export default ShoppingList

