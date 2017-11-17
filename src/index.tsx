import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./ui/App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { fetchInitialData } from "./api/actions";
import { Provider } from "mobx-react";
import { store } from "./store";
import "./store/services";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

fetchInitialData();

// todo init container here

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
