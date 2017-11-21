import * as React from "react";
import { observer } from "mobx-react";

import ResultList from "../containers/ResultList";
import SearchPanel from "../containers/SearchPanel";

@observer
class Home extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <div style={{ alignSelf: "center" }}>
                    <SearchPanel />
                </div>
                <div style={{ alignSelf: "center" }}>
                    <ResultList />
                </div>
            </div>
        );

    }
}

export default Home;