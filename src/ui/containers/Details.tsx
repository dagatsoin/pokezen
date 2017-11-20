import * as React from "react";
import { match } from "react-router-dom";
import { dispatch } from "../../vendor/arcanium/container";
import { inject, observer } from "mobx-react";
import { Model } from "../../api/types";
import CircularProgress from "material-ui/CircularProgress";

@inject("store")
@observer
export default class Details extends React.Component<{
    store: Model,
    match: match<{
        id: string;
    }>;
}> {
    get id(): number {
        return Number(this.props.match.params.id);
    }

    componentDidMount() {
        dispatch("FETCH_POKEMON", this.id);
    }

    render() {
        const pokemon = this.props.store.pokedex.find(pokemon => pokemon.id === this.id);
        return pokemon ? <h1>{pokemon.name}</h1> : <CircularProgress size={60} thickness={7} />;
    }
}