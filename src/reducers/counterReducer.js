export default function counterReducer(state = 10, action) {

    switch(action.type) {

        case "INCREMENT" : {
            return state + 1
            break;
        }

        case "DECREMENT" : {
            return state - 1
            break;
        }
    }

    return state

}