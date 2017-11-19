import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./ui/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { useStrict } from "mobx";
import { Provider } from "mobx-react";
import { model } from "./lib/model";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { container, dispatch } from "./vendor/arcanium/container";

useStrict(true);

container.init(model);
import "./api/actions";
import "./lib/state/controlStates";
import "./lib/state/representations";

dispatch("FETCH_POKEMEON_LIST");

// todo init container here

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={model}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
