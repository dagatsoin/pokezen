import * as React from "react";
import { observer } from "mobx-react";

import { List, ListItem } from "material-ui/List";
import { PokemonListItem } from "../../api/types";

@observer
class PokemonListComp extends React.Component<{ list: Array<PokemonListItem>}> {

    render() {
        return (
            <List>
                {this.props.list.map(pokemon => <ListItem key={pokemon.name} primaryText={pokemon.name} />)}
            </List>
        );

    }
}

export default PokemonListComp;