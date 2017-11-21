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
import AppBar from "material-ui/AppBar";
import { inject, observer } from "mobx-react";
import { getIdFromUrl } from "../../lib/utils";
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Bar.prototype, "name", {
        get: function () {
            if (this.props.location.pathname === "/" ||
                !!!this.props.store.pokemon)
                return "Find them all!";
            else if (this.props.store.pokemon.id === Number(getIdFromUrl(this.props.location.pathname)))
                return this.props.store.pokemon.name;
            else
                return "Loading...";
        },
        enumerable: true,
        configurable: true
    });
    Bar.prototype.render = function () {
        return (React.createElement(AppBar, { title: this.name, iconElementLeft: React.createElement("a", { href: "/", style: { color: "white" } },
                React.createElement("i", { className: "material-icons", style: {
                        margin: "11px 8px",
                    } }, "home")) }));
    };
    Bar = __decorate([
        inject("store"),
        observer
    ], Bar);
    return Bar;
}(React.Component));
export default Bar;
//# sourceMappingURL=AppBar.js.map