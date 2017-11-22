import * as React from "react";
import { observer, inject } from "mobx-react";
import { Model } from "../../api/types";
import { Twitter } from "twit";
import { List, ListItem } from "material-ui/List";
// import { Avatar } from "material-ui/Avatar";

@inject("store")
@observer
export default class TweetFeed extends React.Component<{
    store?: Model;
}> {
    render() {
        return (
            <List>
                {
                    this.props.store!.tweets.map((status: Twitter.Status) => {
                        console.log(status.user.profile_image_url || status.user.default_profile_image);
                        return (
                            <ListItem
                                key={status.id_str}
                                leftAvatar={
                                    <img
                                        style={{ borderRadius: "100%" }}
                                        src={status.user.profile_image_url || status.user.default_profile_image}
                                    />
                                }
                                primaryText={status.user.name}
                                secondaryText={
                                    <p>
                                        <span style={{ color: "darkBlack" }}>{status.user.screen_name}</span> --
                                        {status.text}
                                    </p>
                                }
                                secondaryTextLines={2}
                                onClick={() => window.open(
                                    `https://twitter.com/${status.user.id_str}/status/${status.id_str}`,
                                    "_blank"
                                )}
                            />
                        );
                    })
                }
            </List>
        );
    }
}