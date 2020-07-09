import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore, { history } from "./redux/store";
import { ConnectedRouter } from "connected-react-router";

import Home from "./Pages/Home";
// import ContactDetail from "./Pages/ContactDetail";

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <Route
                            exact
                            path="/contact-detail/:id"
                            component={ContactDetail}
                        /> */}
                    </Switch>
                </BrowserRouter>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
