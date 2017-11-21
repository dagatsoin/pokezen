import * as React from "react";
import AppBar from "material-ui/AppBar";
import { inject, observer } from "mobx-react";
import { Model } from "../../api/types";
import { getIdFromUrl } from "../../lib/utils";

@inject("store")
@observer
export default class Bar extends React.Component<{ store?: Model }> {

    get name() {
        if ((this.props as any).location.pathname === "/" ||
            !!!this.props.store!.pokemon)
            return "Find them all!";
        else if (this.props.store!.pokemon!.id === Number(getIdFromUrl((this.props as any).location.pathname)))
            return this.props.store!.pokemon!.name;
        else return "Loading...";
    }

    render() {
        return (
            <AppBar
                title={this.name}
                iconElementLeft={<a href="/" style={{ color: "white" }}>
                        <i
                            className="material-icons"
                            style={{
                                margin: "11px 8px",
                            }}
                        >
                            home
                        </i>
                
                </a>}
            />
        );
    }
}