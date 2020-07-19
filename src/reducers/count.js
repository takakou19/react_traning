import { INCREMENT, DECREMENT, KAKEZAN} from "../actions";

const initialState = { value : 0, value2 : 3,  test : "aaa"}

export default (state = initialState, action) => {
    console.log("counter.value:" + state.value + " counter.value2:" + state.value2 )

    switch (action.type) {
        case INCREMENT:
            return { value : state.value + 1, value2: state.value2}
        case DECREMENT:
            return { value : state.value - 1 , value2: state.value2}
        case KAKEZAN :
            return { value : state.value * state.value2, value2: state.value2}
        default:
            console.log('defaultのステート' + state.value);
            return state
    }
}