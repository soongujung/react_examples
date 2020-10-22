import React, {Component} from 'react';
import {connect} from 'react-redux';
import {incrementItem, decrementItem} from '../store/modules/cart';
import MartItemList from "./MartItemList";

// 스마트 컴포넌트
class FoodItemContainer extends Component {

    handleIncrement = () => {
        console.log('(Container, handleIncrement) this.props (handleIncrement) >>> ', this.props);
        this.props.incrementItem();
    };

    handleDecrement = () => {
        console.log('(Container, handleIncrement) this.props (handleDecrement) >>> ', this.props);
        this.props.decrementItem();
    };

    render() {
        return (
            <MartItemList
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
        );
    }
}

const mapStateToProps = (cart) => {
    console.log('state >>> ', cart);
    // return state;
    return {
        number: cart.number
    }
}

const mapDispatchToProps = dispatch => ({
    incrementItem: () => dispatch(incrementItem()),
    decrementItem: () => dispatch(decrementItem())
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemContainer);
