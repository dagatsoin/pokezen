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
import { observer } from "mobx-react";
// import { RouteComponentProps } from "react-router-dpo";
import { List, ListItem } from "material-ui/List";
import { withRouter } from "react-router";
var PokemonListComp = /** @class */ (function (_super) {
    __extends(PokemonListComp, _super);
    function PokemonListComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PokemonListComp.prototype.render = function () {
        var _this = this;
        return (React.createElement(List, null, this.props.list.map(function (pokemon) { return React.createElement(ListItem, { key: pokemon.name, primaryText: pokemon.name, onClick: function () { return _this.props.history.push("details/" + pokemon.id); } }); })));
    };
    PokemonListComp = __decorate([
        withRouter,
        observer
    ], PokemonListComp);
    return PokemonListComp;
}(React.Component));
export default PokemonListComp;
//# sourceMappingURL=PokemonList.js.map