import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')   // déclarer l'état initial pour  inputValue   et la fonction correspondante pour la modifier
    return (
        <div>
        <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}      //onChange   pour qu'elle sauvegarde dans mon state local la valeur de mon input. J'accède à la valeur tapée dans l'input avec  e.target.value.
        />
        <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>  
    </div>
    )  //le bouton  déclenche l'alerte avec l'inputvalue qui a accès au contenu de mon input 
}

export default QuestionForm