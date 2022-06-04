import React,{useState,useEffect} from 'react';
import './App.scss';
import SingleCard from "./components/SingleCard";


import img2 from "./img/helmet-1.png";
import img3 from "./img/potion-1.png";
import img4 from "./img/ring-1.png";
import img5 from "./img/scroll-1.png";
import img6 from "./img/shield-1.png";
import img7 from "./img/shield-1.png";


const cardImages = [

{src:img2 ,matched:false},
{src:img3 ,matched:false},
{src:img4 ,matched:false},
{src:img5 ,matched:false},
{src:img6 ,matched:false},
{src:img7 ,matched:false}

]

function App() {
  const [cards,setCards] = useState([]);
  const [turns,setTurns] = useState(0);
  const [choiceOne,setChoiceOne] = useState(null);
  const [choiceTwo,setChoiceTwo] = useState(null);
  const [desabled,setDesabled] = useState(false)

  //shafel cards
   const shuffleCards = () =>{
     const shuffledCards = [...cardImages,...cardImages]
     .sort(() => Math.random() - 0.5)
     .map((card) => ({...card,id:Math.random() }))

     setChoiceOne(null);
     setChoiceTwo(null);
     setCards(shuffledCards)
     setTurns(0)
   }

 //handel a choice
 const handelChoice = (card) =>{
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  
 }

 //compare 2 selected cars
 useEffect(()=>{

   if(choiceOne && choiceTwo){
    setDesabled(true)
    if(choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card =>{
          if (card.src === choiceOne.src) {
            return {...card,matched:true}
          } else {
            return card
          }
        })
      })
      restTurn()
    } else {
     
     setTimeout(() => restTurn(), 1000)
    }
   }
 }, [choiceOne,choiceTwo])
 console.log(cards)

 //rest choice

 const restTurn = () =>{
   setChoiceOne(null)
   setChoiceTwo(null)
   setTurns(prevTurns =>prevTurns + 1)
   setDesabled(false)
 }

//  start a new game automatically

  useEffect(()=> {
    shuffleCards()
  },[])



  return (
    <div className="App">
      <h1>  حدس تصویر</h1>
      <button onClick={shuffleCards}>بازی جدید</button>
      <div className="Card-grid">
        {cards.map(card => (
          <SingleCard 
          key={card.id} 
          card={card} 
          handelChoice={handelChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          desabled={desabled}
          />
         
        ))}
      </div>
      <p>دور:{turns}</p>
    </div>
  );
}

export default App;
