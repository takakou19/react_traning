import { INCREMENT, DECREMENT} from "../actions";

const initialState = { value : 0, test : "aaa"}

export default (state = initialState, action) => {
    console.log("counterファイルのvalue:" + state.value)

    switch (action.type) {
        case INCREMENT:
            return { value : state.value + 1 }
        case DECREMENT:
            return { value : state.value - 1 }
        default:
            console.log('defaultのステート' + state.value);
            return state
    }
}