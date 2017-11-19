import * as React from "react";
import { observer } from "mobx-react";

import AutoComplete from "material-ui/AutoComplete";

const SearchInput: React.StatelessComponent<{ names?: Array<string> }> = ({ names }) => (
    <div>
        <AutoComplete
            floatingLabelText="Search them all..."
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={names || []}
            maxSearchResults={10}
        />
    </div>
);

export default observer(SearchInput);