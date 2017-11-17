import { observer, inject } from "mobx-react";
import * as React from "react";

@inject("store")
@observer
export default class ResultList extends React.Component<{
    searchResult: Array<{ name: string, url: string }>
}> {
    render() {
        return (
            <ul>
                {this.props.searchResult.map((r: { name: string, url: string }, index: number) => <li key={index}>{r.name}</li> )}
            </ul>
        );
    }
}