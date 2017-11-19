import * as React from "react";
import { observer } from "mobx-react";

import ResultList from "../containers/ResultList";
import SearchPanel from "../containers/SearchPanel";

@observer
class Home extends React.Component {

    render() {
        return (
            <div>
                <SearchPanel />
                <ResultList />
            </div>
        );

    }
}

export default Home;