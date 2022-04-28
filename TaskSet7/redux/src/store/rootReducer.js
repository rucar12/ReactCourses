import {combineReducers, createStore} from "redux";
import {reducer} from "./reducers/reducer";


const rootReducer = combineReducers({
    useReducer:reducer
});
const store = createStore(rootReducer);

export default store;