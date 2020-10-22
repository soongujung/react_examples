import React from "react";
import FoodItem from "./item/FoodItem";
import './MartItemList.css'

const martItemList = [
    'PA', 'PEPPER', 'RAMEN', 'TOFU'
];

const MartItemList = () => {
    return (
        <div className="martItemList">
            {
                martItemList.map(
                    item => (<FoodItem itemKind={item} />)
                )
            }
        </div>
    )
};

export default MartItemList;