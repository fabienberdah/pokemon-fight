import React from "react";
import "../styles/Pokecard.css";

class Pokecard extends React.Component {
  getImageSrc = (id) => {
    const reformatedId = `000${id}`.slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${reformatedId}.png`;
  };

  render() {
    const { id, name, type, experience } = this.props;
    return (
      <div className="Pokecard">
        <div className="Pokecard-card">
          <h3 className="Pokecard-title">{name}</h3>
          <img
            src={this.getImageSrc(id)}
            alt="Pikachu"
            className="Pokecard-img"
          />
          <div>
            <strong>Type:</strong> {type}
          </div>
          <div>
            <strong>Experience:</strong> {experience}
          </div>
        </div>
      </div>
    );
  }
}

export default Pokecard;
