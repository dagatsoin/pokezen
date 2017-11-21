import * as React from "react";
import { match } from "react-router-dom";
import { dispatch } from "../../vendor/arcanium/container";
import { inject, observer } from "mobx-react";
import { Model } from "../../api/types";
import CircularProgress from "material-ui/CircularProgress";
import { normalize } from "path";
import { computed, when } from "mobx";
import { getIdFromUrl } from "../../lib/utils";

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

    loadAverageTypeStats = when(
        () => !!this.pokemon,
        () => {
            this.types.forEach(id => dispatch("FETCH_AVARAGE_TYPE_STATS", id));
        }
    );

    componentDidMount() {
        dispatch("FETCH_POKEMON", this.id);
    }

    @computed
    get pokemon() {
        return this.props.store.pokedex.find(pokemon => pokemon.id === this.id);
    }

    get types(): Array<string> {
        return this.pokemon!.types.map(pokemonType => getIdFromUrl(pokemonType.type.url));
    } 

    render() {
        return this.pokemon ? (
            <div>
                <h1>{this.pokemon.name}</h1>
                <img src={`https://img.pokemondb.net/artwork/${normalize(this.pokemon.name)}.jpg`} width="256px" alt="" />
                <ul>
                    {this.pokemon.types.map(pokemonType => <li key={pokemonType.slot}>{pokemonType.type.name}</li>)}
                </ul>
                <ul>
                    {
                        this.pokemon.stats.map(pokemonStat => (
                            <li key={pokemonStat.stat.name}>
                                {pokemonStat.stat.name}: {pokemonStat.base_stat}
                            </li>
                        ))
                    }
                </ul>
                {
                    this.types.map(typeId => {
                        const averageStats = this.props.store.typeAverageStats.find(stats => Number(typeId)  === stats.type.id);
                        return averageStats ? (
                            <div key={typeId}>
                                <p>{averageStats.type.name}</p>
                                <ul>
                                    {averageStats.stats.map(stat => <li key={stat.name}>{stat.name} - {stat.value}</li>)}
                                </ul>
                            </div>
                        ) : <CircularProgress key={typeId} size={30} thickness={3} />;
                    })
                }
            </div>
        ) : <CircularProgress size={60} thickness={7} />;
    }
}