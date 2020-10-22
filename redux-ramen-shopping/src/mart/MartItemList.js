import React, {Component} from "react";
import FoodItem from "./item/FoodItem";
import './MartItemList.css'
import {connect} from 'react-redux';
import {incrementItem, decrementItem} from "../store/modules/cart";

const martItemList = [
    'RAMEN', 'PA', 'PEPPER', 'TOFU'
];

class MartItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            RAMEN :0,
            PA: 0,
            PEPPER: 0,
            TOFU: 0
        }
    }

    handleIncrement = (itemKind) => {
        console.log('(Container, handleIncrement) this.props (handleIncrement) >>> ', this.props);
        this.props.incrementItem(itemKind);
        console.log('selected Item >>> ', itemKind);
        this.setState({
            [itemKind]: this.state[itemKind] + 1
        })
    };

    handleDecrement = (itemKind) => {
        console.log('(Container, handleIncrement) this.props (handleDecrement) >>> ', this.props);
        this.props.decrementItem(itemKind);
        this.setState({
            [itemKind]: this.state[itemKind] - 1
        })
    };

    render () {

        return (
            <div>
                <div className="martItemList">
                    {
                        martItemList.map(
                            item => (
                                <FoodItem
                                    itemKind={item}
                                    key={item}
                                    onIncrement={this.handleIncrement}
                                    onDecrement={this.handleDecrement}
                                />
                            )
                        )
                    }
                </div>
                <hr/>
                <div>
                    <p>열라면 :  {this.state.RAMEN} 개</p>
                    <p>흙대파(단) : {this.state.PA} 개</p>
                    <p>청양고추 150g : {this.state.PEPPER} 개</p>
                    <p>[풀무원] 국산 콩 순두부 (350g) : {this.state.TOFU} 개</p>
                </div>
            </div>
        );
    }
}

// export default MartItemList;

const mapStateToProps = ({cart}) =>{
    console.log('mapStateToProps >>> ');
    const temp = {
        ...cart,
        number: cart.number || 0
    };
    console.log('temp >>> ', temp);
    return temp;
}


const mapDispatchToProps = dispatch => ({
    incrementItem: (itemKind) => dispatch(incrementItem(itemKind)),
    decrementItem: (itemKind) => dispatch(decrementItem(itemKind))
});

export default connect(mapStateToProps, mapDispatchToProps)(MartItemList);