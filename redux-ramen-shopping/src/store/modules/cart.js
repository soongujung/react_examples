const INCREMENT = 'cart/INCREMENT';
const DECREMENT = 'cart/DECREMENT';

export const incrementItem = (itemKind) => ({type: INCREMENT, itemKind: itemKind});
export const decrementItem = (itemKind) => ({type: DECREMENT, itemKind: itemKind});

const initialState = {};

export default function cart(state = initialState, action){
    const itemType = action.itemKind;

    switch (action.type){
        case INCREMENT:
            const incState = {
                ...state,
            };

            incState[itemType] = incState[itemType] || {};
            incState[itemType].number = (incState[itemType].number || 0) + 1;

            return incState;

        case DECREMENT:
            const decState = {
                ...state,
            };

            decState[itemType] = decState[itemType] || {};
            decState[itemType].number = (decState[itemType].number || 0) - 1;

            return decState;

        default:
            const defaultState = {
                ...state
            };
            return defaultState;
    }
}
