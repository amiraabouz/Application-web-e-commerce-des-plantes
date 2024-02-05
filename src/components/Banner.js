import '../styles/Banner.css'
// import Recommendation from './Recommendation'

function Banner({ children }) {   // pour accéder aux noeuds enfants de banner dans ses paramétres => c'est une props passé de parent à l'enfant
    return (
    <div className='lmj-banner'>
        {children}
    </div>
   
   )
}



export default Banner


