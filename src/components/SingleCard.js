import React from 'react';
import "./singleCard.scss";
import img1 from "../img/cover.png";

const SingleCard = ({card,handelChoice}) => {

const handelClick = () =>{
    handelChoice(card)
}

    return (
        <div>
           <div className="Card" >
            <div>
              <img className="front" src={card.src} alt="cart front" />
              <img 
              className="back" 
              src={img1} 
              onClick={handelClick}
              alt="cart back" />
            </div>
          </div>
        </div>
    );
};

export default SingleCard;