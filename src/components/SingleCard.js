import React from 'react';
import "./singleCard.scss";
import img1 from "../img/cover.png";

const SingleCard = ({card,handelChoice,flipped,desabled}) => {

const handelClick = () =>{
    if(!desabled){
        handelChoice(card)

    }
}

    return (
       
           <div className="Card" >
            <div className={flipped ? "flipped" : ""}>
              <img className="front" src={card.src} alt="cart front" />
              <img 
              className="back" 
              src={img1} 
              onClick={handelClick}
              alt="cart back" />
            </div>
          </div>
   
    );
};

export default SingleCard;