import * as React from "react";
import { match } from "react-router-dom";
import { dispatch } from "../../vendor/arcanium/container";
import { inject, observer } from "mobx-react";
import { Model } from "../../api/types";
import { computed, when } from "mobx";
import { normalize, getIdFromUrl } from "../../lib/utils";

import TweetFeed from "../components/TweetFeed";
import CircularProgress from "material-ui/CircularProgress";
import Type from "../components/Type";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";

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
        return this.props.store.pokemon && this.props.store.pokemon.id === this.id ? this.props.store.pokemon : null;
    }

    get types(): Array<string> {
        return this.pokemon!.types.map(pokemonType => getIdFromUrl(pokemonType.type.url));
    }

    render() {
        return this.pokemon ? (
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        flex: 1,
                        alignSelf: "center",
                        height: "256px",
                        position: "relative",
                    }}
                >
                    <object
                        style={{ position: "absolute", zIndex: 10, left: "-128px" }}
                        data={`https://img.pokemondb.net/artwork/${normalize(this.pokemon.name)}.jpg`}
                        width="256px"
                        height="256px"
                        type="image/png"
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                backgroundSize: "512px 512px",
                                backgroundPosition: "50% 50%",
                                backgroundImage: `url(${this.pokemon.sprites.front_default})`,
                                WebkitFilter: "blur(10px)",
                                MozFilter: "blur(10px)",
                                OFilter: "blur(10px)",
                                MsFilter: "blur(10px)",
                                filter: "blur(10px)"
                            }}
                        />
                        <img
                            style={{
                                position: "absolute",
                                top: 0,
                                width: "100%",
                                height: "100%",
                                imageRendering: "pixelated"
                            }}
                            src={this.pokemon.sprites.front_default}
                            width="128px"
                        />
                    </object>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <List>
                        <ListItem><h3 style={{ margin: 0 }}>Base Stats</h3></ListItem>
                        <ListItem>
                            {
                                this.pokemon.types.map(pokemonType => (
                                    <Type type={pokemonType.type.name} key={pokemonType.type.url} />
                                ))
                            }
                        </ListItem>
                        <Divider />
                        {
                            this.pokemon.stats.map(pokemonStat => (
                                <ListItem key={pokemonStat.stat.name}>
                                    {pokemonStat.stat.name}: {pokemonStat.base_stat}
                                </ListItem>
                            ))
                        }
                    </List>
                    {
                        this.types.map(typeId => {
                            const averageStats = this.props.store.typeAverageStats.find(stats => Number(typeId) === stats.type.id);
                            return averageStats ? (
                                <List key={typeId}>
                                    <ListItem><h3 style={{ margin: 0 }}>Average stats for</h3></ListItem>
                                    <ListItem><Type type={averageStats.type.name} /></ListItem>
                                    <Divider />
                                    {
                                        averageStats.stats.map(stat => (
                                            <ListItem key={stat.name}>{stat.name} - {stat.value}</ListItem>
                                        ))
                                    }

                                </List>
                            ) : <CircularProgress key={typeId} size={30} thickness={3} />;
                        })
                    }
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <TweetFeed hashtag={normalize(this.pokemon.name)} />
                </div>
            </div>
        ) : <CircularProgress size={60} thickness={7} />;
    }
}