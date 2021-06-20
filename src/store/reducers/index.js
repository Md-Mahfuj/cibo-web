import {createStore,combineReducers} from "redux"
import rootReducer from "./rootReducer";
import ProductReducer from './ProductReducer'; 
import CartReducer from "./CartReducer"

import { devToolsEnhancer } from 'redux-devtools-extension';


const root = combineReducers({
    ProductReducer:ProductReducer,
    rootReducer:rootReducer,
    CartReducer:CartReducer
});



//const store=createStore(root);
const store = createStore(root, /* preloadedState, */ devToolsEnhancer(
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));

export default store;