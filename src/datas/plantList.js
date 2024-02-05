import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'


export const plantList = [
	{
		name: 'Monstera',
		category: 'Classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price: 15,
		description: 'Le Monstera Deliciosa, aussi appelé Faux Philodendron, est une plante d’intérieur de la famille des Aracées, originaire Amérique centrale et du Brésil. Elle est très appréciée pour ses qualités esthétiques, sa facilité d’entretien et sa robustesse'
	},
	{
		name: 'Ficus lyrata',
		category: 'Classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16, 
		description : 'Le Ficus est un genre dans la famille des Moraceae, représenté par des arbres, des arbustes ou des lianes. Avec plus de 750 espèces connues il sagit, avec Dorstenia, d’un des principaux genres de sa famille.'
	},

	{
		name: 'Pothos argenté',
		category: 'Classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
		price: 9,
		description:'Le Pothos Argenté ou Scindapsus Pictus,est une plante robuste et facile d’entretien, il conviendra à tous les publics et encore plus aux débutants qui désirent se lancer dans l’aventure jungle at home.'
	},
	{
		name: 'Calathea',
		category: 'Classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,
		description: 'La Calathea est un genre de plantes monocotylédones appartenant à la famille des Marantaceae. Ce genre comprend aujourd’hui 56 espèces de plantes herbacées. De nombreuses espèces autrefois classées dans le genre Calathea sont aujourd’hui classées dans le genre Goeppertia.',
		price: 20
	},
	{
		name: 'Olivier',
		category: 'Extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 25,
		description:'L’olivier est un arbre fruitier qui produit les olives, un fruit consommé sous diverses formes et dont on extrait une des principales huiles alimentaires, l’huile d’olive.'
	},

	{
		name: 'Cactus',
		category: 'Plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 6,
		description:'Les Cactus, Cactées ou encore Cactacées sont une famille de plantes à fleurs. Ce sont presque toutes des plantes grasses ou plantes succulentes, c’est-à-dire des plantes xérophytes qui stockent dans leurs tissus des réserves de « suc » pour faire face aux longues périodes de sécheresse'
	},
	{
		name: 'Basilique',
		category: 'Extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: basil,
		price: 5,
		description:'Le basilic est une espèce de plantes herbacées thérophytes de la famille des Lamiacées (labiacées, labiées), cultivée comme plante aromatique et condimentaire. '
	},
	{
		name: 'Succulente',
		category: 'Plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8,
		description:'La succulente, appelée aussi malacophyte, est une plante charnue adaptée pour survivre dans des milieux arides du fait des caractéristiques du sol, du climat ou à forte concentration en sel .'
	},

	{
		name: 'Menthe',
		category: 'Extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4,
		description:'La menthe est une plante vivace ou annuelle. Son feuillage, semi-persistant, très aromatique l’a rendue incontournable en cuisine. Elle est également utilisée comme plante médicinale. '
	}
]

