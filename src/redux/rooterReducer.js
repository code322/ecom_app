import {cartReducer} from './reducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    cart: cartReducer,
    }
) 

export default rootReducer;