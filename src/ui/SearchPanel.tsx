import * as React from "react";
import "./App.css";
import { observer, inject } from "mobx-react";
import { Model } from "../api/types";

import SearchInput from "./SearchInput";
import CircularProgress from "material-ui/CircularProgress";
import { dispatch } from "../vendor/arcanium/container";

@inject("store")
@observer
class SearchPanel extends React.Component<{ store?: Model }> {
  constructor(props: { store: Model }) {
    super(props);
  }

  render() {
    return this.props.store!.pendingRequest.length ?
      <CircularProgress size={60} thickness={7} />
      :
      (
        <SearchInput
          onInput={(query: string) => dispatch("SEARCH", query)}
          names={this.props.store!.names.slice(0)}
        />
      );
  }
}

export default SearchPanel;