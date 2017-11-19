import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { useStrict } from "mobx";
import { Provider } from "mobx-react";
import { model } from "./lib/model";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { container, dispatch } from "./vendor/arcanium/container";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from "./ui/features/Home";
import SearchInput from "./ui/components/SearchInput";
useStrict(true);

container.init(model);
import "./api/actions";
import "./lib/state/controlStates";
import "./lib/state/representations";

dispatch("FETCH_INITIAL_DATA");

// todo init container here

ReactDOM.render(
  <Router>
    <MuiThemeProvider>
      <Provider store={model}>
        <div>
          <li><Link to="/details">About</Link></li>
          <Route exact={true} path="/" component={Home} />
          <Route path="/details" component={SearchInput} />
        </div>
      </Provider>
    </MuiThemeProvider>
  </Router >,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
