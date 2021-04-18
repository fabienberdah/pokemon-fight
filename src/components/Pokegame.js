import React from "react";
import Pokecard from "./Pokecard";
import "../styles/Pokegame.css";

class Pokegame extends React.Component {
  render() {
    const hand1 = [...this.props.pokemons];
    const hand2 = [];

    while (hand1.length > hand2.length) {
      const randomIndex = Math.floor(Math.random() * hand1.length);
      hand2.push(hand1.splice(randomIndex, 1)[0]);
    }

    console.table(hand1);
    console.table(hand2);

    const renderHand = (hand) =>
      hand.map(({ id, name, type, experience }) => {
        return (
          <Pokecard
            key={id}
            name={name}
            type={type}
            experience={experience}
            id={id}
          />
        );
      });

    let experience1 = hand1.reduce(
      (totalExperience, pokemon) => totalExperience + pokemon.experience,
      0
    );

    let experience2 = hand2.reduce(
      (totalExperience, pokemon) => totalExperience + pokemon.experience,
      0
    );

    const result =
      experience1 > experience2 ? (
        <h2 className="winner">Player1 wins</h2>
      ) : (
        <h2 className="winner">Player2 wins</h2>
      );

    return (
      <div className="Pokegame">
        <div className="Pokegame-hands">
          <div className="Pokegame-hand">
            <h2 className="Pokegame-hand-title">Player 1</h2>
            <h4>Total experience: {experience1}</h4>
            <div className="Pokegame-renderedHand">{renderHand(hand1)}</div>
          </div>
          <div className="Pokegame-hand">
            <h2 className="Pokegame-hand-title">Player 2</h2>
            <h4>Total experience: {experience2}</h4>
            <div className="Pokegame-renderedHand">{renderHand(hand2)}</div>
          </div>
        </div>
        {result}
      </div>
    );
  }
}

export default Pokegame;
