import * as React from "react";

export default class TweetFeed extends React.Component<{ hashtag: string }> {

    componentDidMount() {
        const d: Document = document;
        const s = "script";
        const id = "twitter-wjs";
        const fjs = d.getElementsByTagName(s)[0];
        let js;
        const p = /^http:/.test(d.location as any as string) ? "http" : "https";

        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://platform.twitter.com/widgets.js";
            fjs.parentNode!.insertBefore(js, fjs);
        }
    }

    render() {
        return (
            <div>
                <a
                    className="twitter-timeline"
                    data-dnt="true"
                    href={`https://twitter.com/hashtag/${this.props.hashtag}`}
                    data-widget-id="933036531878694913"
                    data-screen-name={this.props.hashtag}
                >
                    Tweets sur #{this.props.hashtag}
                </a>
            </div>
        );
    }
}