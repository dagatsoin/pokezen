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
import { observer, inject } from "mobx-react";
import SearchInput from "../components/SearchInput";
import CircularProgress from "material-ui/CircularProgress";
import { dispatch } from "../../vendor/arcanium/container";
var SearchPanel = /** @class */ (function (_super) {
    __extends(SearchPanel, _super);
    function SearchPanel(props) {
        return _super.call(this, props) || this;
    }
    SearchPanel.prototype.render = function () {
        return this.props.store.pendingRequest.length ?
            React.createElement(CircularProgress, { size: 60, thickness: 7 })
            :
                (React.createElement(SearchInput, { onInput: function (query) { return dispatch("SEARCH", query); }, names: this.props.store.names.slice(0) }));
    };
    SearchPanel = __decorate([
        inject("store"),
        observer
    ], SearchPanel);
    return SearchPanel;
}(React.Component));
export default SearchPanel;
//# sourceMappingURL=SearchPanel.js.map