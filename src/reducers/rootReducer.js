import { combineReducers } from "redux";
import reducerTask from "./reducerTask";

const rootReducer = combineReducers({
    tasks:reducerTask,
})

export default rootReducer;