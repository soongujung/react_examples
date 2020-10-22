import React from "react";

import './FoodItem.css';

import pa from './pa.jpg';
import pepper from './pepper.jpg';
import ramen from './ramen.jpg';
import tofu from './tofu.jpg';

const itemInfo = {
    PA : {
        id: 'PA',
        img : pa,
        korDisplay: '흙대파(단)'
    },
    PEPPER : {
        id: 'PEPPER',
        img: pepper,
        korDisplay: '청양고추 150g'
    },
    RAMEN : {
        id: 'RAMEN',
        img: ramen,
        korDisplay: '라면'
    },
    TOFU : {
        id: 'TOFU',
        img: tofu,
        korDisplay: '[풀무원] 국산 콩 순두부 (350g)'
    }
};

const FoodItem = ({itemKind}) => {
    console.log('itemKind >>> ', itemKind);
    console.log('itemInfo >>> ', itemInfo);
    const imgSrc = itemInfo[itemKind].img;
    const imgName = itemInfo[itemKind].korDisplay;

    return (
      <div className="foodItem">
          <img className="foodImg" src={imgSrc} alt="thumbnail"/>
          <span className="displayLabel">{imgName}</span>
          <div className="foodItemButtons">
              <button> + </button>
              <button> - </button>
          </div>
      </div>
    );
};

export default FoodItem;