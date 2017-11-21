import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { useStrict } from "mobx";
import { Provider } from "mobx-react";
import { model } from "./lib/model";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { container, dispatch } from "./vendor/arcanium/container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./ui/features/Home";
import Details from "./ui/features/Details";
import AppBar from "./ui/containers/AppBar";
useStrict(true);
// Arcanium container initialization.
container.init(model);
import "./api/actions";
import "./lib/state/controlStates";
import "./lib/state/representations";
dispatch("FETCH_INITIAL_DATA");
ReactDOM.render(React.createElement(Router, null,
    React.createElement(MuiThemeProvider, null,
        React.createElement(Provider, { store: model },
            React.createElement("div", { style: { display: "flex", width: "100%", flexDirection: "column" } },
                React.createElement(Route, { path: "/", component: AppBar }),
                React.createElement(Route, { exact: true, path: "/", component: Home }),
                React.createElement(Route, { path: "/details/:id", component: Details }))))), document.getElementById("root"));
registerServiceWorker();
//# sourceMappingURL=index.js.map