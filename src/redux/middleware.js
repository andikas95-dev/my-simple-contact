import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";

const middleware = [];
middleware.push(promise);
if (process.env.NODE_ENV === `development`) {
    middleware.push(createLogger());
}

export default middleware;
