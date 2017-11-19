import * as React from "react";
import "./App.css";
import { observer, inject } from "mobx-react";
import { Model } from "../api/types";

import SearchInput from "./SearchInput";
import CircularProgress from "material-ui/CircularProgress";

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
      <SearchInput names={this.props.store!.pokemonList.map(item => item.name)} />;
  }
}

export default SearchPanel;