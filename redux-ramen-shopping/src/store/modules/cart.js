// 액션 타입 정의
const INCREMENT = 'cart/INCREMENT';
const DECREMENT = 'cart/DECREMENT';

export const incrementItem = (itemKind) => ({type: INCREMENT, itemKind: itemKind});
export const decrementItem = (itemKind) => ({type: DECREMENT, itemKind: itemKind});
// export const currentState = () => ()

const initialState = {
    number: 0
};

export default function cart(state = initialState, action){
    const itemType = action.itemKind;

    switch (action.type){
        case INCREMENT:
            console.log('reducer (inc) >>> ', state);
            console.log('reducer (inc) >>> action ::: ', action);
            const incState = {
                ...state,
                // number: state.number + 1,
                // itemKind: action.itemKind,
            };

            incState[itemType] = incState[itemType] || {};
            incState[itemType].number = (incState[itemType].number || 0) + 1;

            return incState;

        case DECREMENT:
            console.log('reducer (dec) >>> ', state);
            const decState = {
                ...state,
                // number: state.number -1,
                // itemKind: action.itemKind,
            };

            decState[itemType] = decState[itemType] || {};
            decState[itemType].number = (decState[itemType].number || 0) - 1;

            return decState;
        default:
            const defaultState = {
                ...state
            };

            defaultState[itemType] = defaultState[itemType] || {};
            defaultState[itemType].number = (defaultState[itemType].number || 0);

            return state;
    }
}
