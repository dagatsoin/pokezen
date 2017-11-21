import * as React from "react";
import { observer } from "mobx-react";

import AutoComplete from "material-ui/AutoComplete";

@observer
export class SearchInput extends React.Component<{
    names?: Array<string>;
    onInput(query: string): void
}> {
    text: string = "";

    render() {
        return (
            <div>
                <AutoComplete
                    floatingLabelText="Search them all..."
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={this.props.names || []}
                    maxSearchResults={10}
                    onNewRequest={(chosenRequest: string, index: number) => this.props.onInput(chosenRequest)}
                    onUpdateInput={(text: string) => this.text = text}
                />
            </div>
        );
    }
}

export default SearchInput;