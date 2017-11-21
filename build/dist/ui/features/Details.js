var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { dispatch } from "../../vendor/arcanium/container";
import { inject, observer } from "mobx-react";
import { computed, when } from "mobx";
import { normalize, getIdFromUrl } from "../../lib/utils";
import TweetFeed from "../components/TweetFeed";
import CircularProgress from "material-ui/CircularProgress";
import Type from "../components/Type";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
var Details = /** @class */ (function (_super) {
    __extends(Details, _super);
    function Details() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadAverageTypeStats = when(function () { return !!_this.pokemon; }, function () {
            _this.types.forEach(function (id) { return dispatch("FETCH_AVARAGE_TYPE_STATS", id); });
        });
        return _this;
    }
    Object.defineProperty(Details.prototype, "id", {
        get: function () {
            return Number(this.props.match.params.id);
        },
        enumerable: true,
        configurable: true
    });
    Details.prototype.componentDidMount = function () {
        dispatch("FETCH_POKEMON", this.id);
    };
    Object.defineProperty(Details.prototype, "pokemon", {
        get: function () {
            return this.props.store.pokemon && this.props.store.pokemon.id === this.id ? this.props.store.pokemon : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Details.prototype, "types", {
        get: function () {
            return this.pokemon.types.map(function (pokemonType) { return getIdFromUrl(pokemonType.type.url); });
        },
        enumerable: true,
        configurable: true
    });
    Details.prototype.render = function () {
        var _this = this;
        return this.pokemon ? (React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column" } },
            React.createElement("div", { style: {
                    flex: 1,
                    alignSelf: "center",
                    height: "256px",
                    position: "relative",
                } },
                React.createElement("object", { style: { position: "absolute", zIndex: 10, left: "-128px" }, data: "https://img.pokemondb.net/artwork/" + normalize(this.pokemon.name) + ".jpg", width: "256px", height: "256px", type: "image/png" },
                    React.createElement("div", { style: {
                            width: "100%",
                            height: "100%",
                            backgroundSize: "512px 512px",
                            backgroundPosition: "50% 50%",
                            backgroundImage: "url(" + this.pokemon.sprites.front_default + ")",
                            WebkitFilter: "blur(10px)",
                            MozFilter: "blur(10px)",
                            OFilter: "blur(10px)",
                            MsFilter: "blur(10px)",
                            filter: "blur(10px)"
                        } }),
                    React.createElement("img", { style: {
                            position: "absolute",
                            top: 0,
                            width: "100%",
                            height: "100%",
                            imageRendering: "pixelated"
                        }, src: this.pokemon.sprites.front_default, width: "128px" }))),
            React.createElement("div", { style: { display: "flex", justifyContent: "center" } },
                React.createElement(List, null,
                    React.createElement(ListItem, null,
                        React.createElement("h3", { style: { margin: 0 } }, "Base Stats")),
                    React.createElement(ListItem, null, this.pokemon.types.map(function (pokemonType) { return (React.createElement(Type, { type: pokemonType.type.name, key: pokemonType.type.url })); })),
                    React.createElement(Divider, null),
                    this.pokemon.stats.map(function (pokemonStat) { return (React.createElement(ListItem, { key: pokemonStat.stat.name },
                        pokemonStat.stat.name,
                        ": ",
                        pokemonStat.base_stat)); })),
                this.types.map(function (typeId) {
                    var averageStats = _this.props.store.typeAverageStats.find(function (stats) { return Number(typeId) === stats.type.id; });
                    return averageStats ? (React.createElement(List, { key: typeId },
                        React.createElement(ListItem, null,
                            React.createElement("h3", { style: { margin: 0 } }, "Average stats for")),
                        React.createElement(ListItem, null,
                            React.createElement(Type, { type: averageStats.type.name })),
                        React.createElement(Divider, null),
                        averageStats.stats.map(function (stat) { return (React.createElement(ListItem, { key: stat.name },
                            stat.name,
                            " - ",
                            stat.value)); }))) : React.createElement(CircularProgress, { key: typeId, size: 30, thickness: 3 });
                })),
            React.createElement("div", { style: { display: "flex", justifyContent: "center" } },
                React.createElement(TweetFeed, { hashtag: normalize(this.pokemon.name) })))) :
            (React.createElement("div", { style: { display: "flex", justifyContent: "center" } },
                React.createElement(CircularProgress, { size: 60, thickness: 7 })));
    };
    __decorate([
        computed
    ], Details.prototype, "pokemon", null);
    Details = __decorate([
        inject("store"),
        observer
    ], Details);
    return Details;
}(React.Component));
export default Details;
//# sourceMappingURL=Details.js.map