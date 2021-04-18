import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import Pokegame from "./components/Pokegame";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [
        { id: 4, name: "Charmander", type: "fire", experience: 62 },
        { id: 7, name: "Squirtle", type: "water", experience: 63 },
        { id: 11, name: "Metapod", type: "bug", experience: 72 },
        { id: 12, name: "Butterfree", type: "flying", experience: 178 },
        { id: 25, name: "Pikachu", type: "electric", experience: 112 },
        { id: 39, name: "Jigglypuff", type: "normal", experience: 95 },
        { id: 94, name: "Gengar", type: "poison", experience: 225 },
        { id: 133, name: "Eevee", type: "normal", experience: 65 },
      ],
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Pokedex {...props} pokemons={this.state.pokemons} />
              )}
            />

            <Route
              path="/game"
              render={(props) => (
                <Pokegame {...props} pokemons={this.state.pokemons} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
