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
import AutoComplete from "material-ui/AutoComplete";
var SearchInput = /** @class */ (function (_super) {
    __extends(SearchInput, _super);
    function SearchInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = "";
        return _this;
    }
    SearchInput.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(AutoComplete, { floatingLabelText: "Search them all...", filter: AutoComplete.caseInsensitiveFilter, dataSource: this.props.names || [], maxSearchResults: 10, onNewRequest: function (chosenRequest, index) { return _this.props.onInput(chosenRequest); }, onUpdateInput: function (text) { return _this.text = text; } })));
    };
    SearchInput = __decorate([
        observer
    ], SearchInput);
    return SearchInput;
}(React.Component));
export { SearchInput };
export default SearchInput;
//# sourceMappingURL=SearchInput.js.map