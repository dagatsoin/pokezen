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
import { observer, inject } from "mobx-react";
import * as React from "react";
import PokemonList from "../components/PokemonList";
var ResultListComp = /** @class */ (function (_super) {
    __extends(ResultListComp, _super);
    function ResultListComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultListComp.prototype.render = function () {
        return (React.createElement(PokemonList, { list: this.props.store.searchResult
                .sort(function (a, b) { return a.rank - b.rank; })
                .map(function (result) { return ({ name: result.pokemon.name, id: result.pokemon.id }); }) }));
    };
    ResultListComp = __decorate([
        inject("store"),
        observer
    ], ResultListComp);
    return ResultListComp;
}(React.Component));
export default ResultListComp;
//# sourceMappingURL=ResultList.js.map