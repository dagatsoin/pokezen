import { observer, inject } from "mobx-react";
import * as React from "react";
import { Model } from "../../api/types";

import PokemonList from "../components/PokemonList";

@inject("store")
@observer
export default class ResultListComp extends React.Component<{
    store?: Model
}> {
    render() {
        return (
            <PokemonList
                list={this.props.store!.searchResult
                    .sort((a, b) => a.rank - b.rank)
                    .map(result => ({ name: result.pokemon.name, url: result.pokemon.url }))}
            />
        );
    }
}