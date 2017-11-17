import * as React from "react";
import { inject, observer } from "mobx-react";
import { Store } from "../api/types";

import AutoComplete from "material-ui/AutoComplete";
import CircularProgress from 'material-ui/CircularProgress';

const SearchInput: React.StatelessComponent<{ store?: Store }> = ({ store }) => (
    <div>
        {store!.pendingRequest.length ?
            <CircularProgress size={60} thickness={7} />
            :
            <AutoComplete
                floatingLabelText="Search them all..."
                filter={AutoComplete.caseInsensitiveFilter}
                dataSource={store!.listCache.map(i => i.name)}
                maxSearchResults={10}
            />
        }
    </div>
);

export default inject("store")(observer(SearchInput));