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
import * as React from "react";
var Type = /** @class */ (function (_super) {
    __extends(Type, _super);
    function Type() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Type.prototype, "color", {
        get: function () {
            switch (this.props.type.toLowerCase()) {
                case "normal": return "#A8A878";
                case "fire": return "#F08030";
                case "fighting": return "#C03028";
                case "water": return "#6890F0";
                case "flying": return "#A890F0";
                case "grass": return "#78C850";
                case "poison": return "#A040A0";
                case "electric": return "#F8D030";
                case "ground": return "#E0C068";
                case "psychic": return "#F85888";
                case "rock": return "#B8A038";
                case "ice": return "#98D8D8";
                case "bug": return "#A8B820";
                case "dragon": return "#7038F8";
                case "ghost": return "#705898";
                case "dark": return "#705848";
                case "steel": return "#B8B8D0";
                case "fairy": return "#EE99AC";
                default: return "#68A090";
            }
        },
        enumerable: true,
        configurable: true
    });
    Type.prototype.render = function () {
        return (React.createElement("span", { style: {
                color: "white",
                padding: "3px",
                margin: "3px",
                borderRadius: "10px",
                fontSize: ".75rem",
                backgroundColor: this.color
            } }, this.props.type));
    };
    return Type;
}(React.Component));
export default Type;
//# sourceMappingURL=Type.js.map