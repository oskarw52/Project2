import './App.css'
import { useState } from 'react';

const App = () => {
  const questions = [["Spirit Rush", "Ahri"], ["Last Breath", "Yasuo"], ["Super Mega Death Rocket!", "Jinx"], ["The Box", "Thresh"], 
    ["Death Mark", "Zed"], ["Final Spark", "Lux"], ["Dragon's Rage", "Lee Sin"], ["Blade of the Exile", "Riven"], ["Death Lotus", "Katarina"],
    ["Demacian Justice", "Garen"], ["Final Hour", "Vayne"], ["Bullet Time", "Miss Fortune"], ["Perfect Execution", "Akali"], 
    ["Tidal Wave", "Nami"], ["Glacial Fissure", "Braum"], ["Noxian Guillotine", "Darius"], ["On the Hunt", "Sivir"]];
  const [card, setCard] = useState(Math.floor(Math.random() * questions.length)); 
  const [cardStatus, setCardStatus] = useState(0);
  const updateCard = () => {
    let oldCard = card;
    let newCard;
    do {
      newCard = Math.floor(Math.random() * questions.length);
    } while (newCard == oldCard);
    setCard(newCard);
    setCardStatus(0);
  }
  
  const updateCardStatus = () => {
    setCardStatus(cardStatus ? 0: 1);
  }

  return (
    <div className='app'>
      <h1 className='text'>League of Legends Ultimate Guesser!</h1>
      <h2 className='text'>This set of flashcards will test your knowledge of the ultimate ability names of League of Legends champions</h2>
      <h2 className='text'>Total cards: {questions.length}</h2>
      <div className='card' onClick={updateCardStatus}>
      <h3 className='cardText'>{questions[card][cardStatus]}</h3>
      </div>
      <button className='next' onClick={updateCard}>Next Card</button>
    </div>
  )
}
export default App
