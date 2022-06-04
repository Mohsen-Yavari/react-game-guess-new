import React,{useState} from 'react';
import './App.scss';
import SingleCard from "./components/SingleCard";


import img2 from "./img/helmet-1.png";
import img3 from "./img/potion-1.png";
import img4 from "./img/ring-1.png";
import img5 from "./img/scroll-1.png";
import img6 from "./img/shield-1.png";
import img7 from "./img/shield-1.png";


const cardImages = [

{src:img2},
{src:img3},
{src:img4},
{src:img5},
{src:img6},
{src:img7}

]

function App() {
  const [cards,setCards] = useState([]);
  const [turns,setTurns] = useState(0);
  const [choiceOne,setChoiceOne] = useState(null);
  const [choiceTwo,setChoiceTwo] = useState(null);

  //shafel cards
   const shuffleCards = () =>{
     const shuffledCards = [...cardImages,...cardImages]
     .sort(() => Math.random() - 0.5)
     .map((card) => ({...card,id:Math.random() }))

     setCards(shuffledCards)
     setTurns(0)
   }

   console.log(cards,turns);



  return (
    <div className="App">
      <h1>  جادویی</h1>
      <button onClick={shuffleCards}>بازی جدید</button>
      <div className="Card-grid">
        {cards.map(card=>(
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
