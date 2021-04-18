import React from "react";
import Pokecard from "./Pokecard";
import "../styles/Pokedex.css";

class Pokedex extends React.Component {
  render() {
    const renderPokemons = this.props.pokemons.map(
      ({ id, name, type, experience }) => {
        return (
          <Pokecard
            key={id}
            name={name}
            type={type}
            experience={experience}
            id={id}
          />
        );
      }
    );
    return (
      <div>
        <div className="Pokedex">{renderPokemons}</div>
      </div>
    );
  }
}

export default Pokedex;
