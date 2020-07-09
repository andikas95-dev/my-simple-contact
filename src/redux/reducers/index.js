import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import reducerContact from "./reducerContact";

const appReducers = (history) =>
    combineReducers({
        contact: reducerContact,
        router: connectRouter(history),
    });

export default appReducers;
