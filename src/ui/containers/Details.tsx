import * as React from "react";
import { match } from "react-router-dom";
import { dispatch } from "../../vendor/arcanium/container";
import { inject, observer } from "mobx-react";
import { Model } from "../../api/types";
import CircularProgress from "material-ui/CircularProgress";
import { normalize } from "path";

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
        return pokemon ? (
            <div>
                <h1>{pokemon.name}</h1>
                <img src={`https://img.pokemondb.net/artwork/${normalize(pokemon.name)}.jpg`} width="256px" alt="" />
                <ul>
                    {pokemon.types.map(pokemonType => <li key={pokemonType.slot}>{pokemonType.type.name}</li>)}
                </ul>
                <ul>{
                    pokemon.stats.map(pokemonStat => (
                        <li key={pokemonStat.stat.name}>
                            {pokemonStat.stat.name}: {pokemonStat.base_stat} - {pokemonStat.effort}
                        </li>
                    ))
                }</ul>
            </div>
        ) : <CircularProgress size={60} thickness={7} />;
    }
}