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
        this.state = {}
    }

    handleIncrement = (itemKind) => {
        console.log('(Container, handleIncrement) this.props (handleIncrement) >>> ');
        this.props.incrementItem(itemKind);

        this.setState({
            [itemKind]: (this.state[itemKind] || 0) + 1
        })
    };

    handleDecrement = (itemKind) => {
        console.log('(Container, handleIncrement) this.props (handleDecrement) >>> ', this.props);
        this.props.decrementItem(itemKind);
        console.log('(dec) props >>> ', this.props)
        this.setState({
            [itemKind]: (this.state[itemKind] || 0) - 1
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
                    <p>열라면 :  {this.state.RAMEN || 0} 개</p>
                    <p>흙대파(단) : {this.state.PA || 0} 개</p>
                    <p>청양고추 150g : {this.state.PEPPER || 0} 개</p>
                    <p>[풀무원] 국산 콩 순두부 (350g) : {this.state.TOFU || 0} 개</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({cart}) =>{
    const temp = {
        ...cart,
    };
    return temp;
}


const mapDispatchToProps = dispatch => ({
    incrementItem: (itemKind) => dispatch(incrementItem(itemKind)),
    decrementItem: (itemKind) => dispatch(decrementItem(itemKind))
});

export default connect(mapStateToProps, mapDispatchToProps)(MartItemList);