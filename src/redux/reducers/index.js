import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const appReducers = (history) =>
    combineReducers({
        // users: reducerUsers,
        router: connectRouter(history),
    });

export default appReducers;
