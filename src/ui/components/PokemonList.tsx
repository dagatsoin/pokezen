import * as React from "react";
import { observer } from "mobx-react";
// import { RouteComponentProps } from "react-router-dpo";
import { List, ListItem } from "material-ui/List";
import { PokemonListItem } from "../../api/types";
import { withRouter } from "react-router";

@withRouter
@observer
class PokemonListComp extends React.Component<{
    list: Array<PokemonListItem>;
}> {

    render() {
        return (
            <List>
                {this.props.list.map(pokemon => <ListItem
                    key={pokemon.name}
                    primaryText={pokemon.name}
                    onClick={() => (this.props as any).history.push("details/" + pokemon.id)}
                />)}
            </List>
        );

    }
}

export default PokemonListComp;