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
var TweetFeed = /** @class */ (function (_super) {
    __extends(TweetFeed, _super);
    function TweetFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TweetFeed.prototype.componentDidMount = function () {
        var d = document;
        var s = "script";
        var id = "twitter-wjs";
        var fjs = d.getElementsByTagName(s)[0];
        var js;
        var p = /^http:/.test(d.location) ? "http" : "https";
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    };
    TweetFeed.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("a", { className: "twitter-timeline", "data-dnt": "true", href: "https://twitter.com/hashtag/" + this.props.hashtag, "data-widget-id": "933036531878694913", "data-screen-name": this.props.hashtag },
                "Tweets sur #",
                this.props.hashtag)));
    };
    return TweetFeed;
}(React.Component));
export default TweetFeed;
//# sourceMappingURL=TweetFeed.js.map