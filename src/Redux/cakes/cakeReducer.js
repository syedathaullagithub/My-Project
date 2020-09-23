// a function that accepts state and actions as parameters and returns the new state
import {
    BUY_CAKES,
    EMPTY_STORE,STORE_CAKES
} from './cakeTypes'


const initialState = {
    noOfCakes: 0
}

const cakeReducer = ((state = initialState, action) => {
    debugger
    switch (action.type) {
        case BUY_CAKES:
            if (state.noOfCakes !== 0) {
                return {
                    ...state,
                    noOfCakes: state.noOfCakes - 1
                }
            } else {
                return state
            }

            case STORE_CAKES:
                if (state.noOfCakes >= 0 && state.noOfCakes < 10) {
                    return {
                        ...state,
                        noOfCakes: state.noOfCakes + 1
                    }
                } else {
                    return state
                }


                case EMPTY_STORE:

                    return {
                        ...state,
                        noOfCakes: state.noOfCakes = 0
                    }

                    default:
                        return state
    }
})


export default cakeReducer;