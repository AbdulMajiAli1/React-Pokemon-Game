import React, { Component } from 'react'
import Pokedata from './Pokedata';
import "./Pokegame.css"
class Pokegame extends Component {
	static defaultProps = {
		pokemon: [
			{ id: 4, name: "Charmender", type: "Fire", base_experience: 72, img: "/low_imgs/charmender.png" },
			{ id: 7, name: "Squirtle", type: "Water", base_experience: 63, img: "/low_imgs/squirtle.png" },
			{ id: 11, name: "Metapod", type: "Bug", base_experience: 62, img: "/low_imgs/metapod.png" },
			{ id: 12, name: "Butterfree", type: "Flying", base_experience: 178, img: "/low_imgs/butterfree.png" },
			{ id: 25, name: "Pikachu", type: "Electric", base_experience: 225, img: "/low_imgs/pikachu.png" },
			{ id: 39, name: "Jigglypuff", type: "Normal", base_experience: 95, img: "/low_imgs/jigglypuff.png" },
			{ id: 94, name: "Gengar", type: "Poison", base_experience: 325, img: "/low_imgs/genger.png" },
			{ id: 133, name: "Eevee", type: "Normal", base_experience: 65, img: "/low_imgs/eevee.png" },
		]
	};
	render() {
		let hand1 = [];
		let hand2 = [...this.props.pokemon];
		while (hand1.length < hand2.length) {
			let randIndx = Math.floor(Math.random() * hand2.length);
			let randPokemon = hand2.splice(randIndx, 1)[0];
			hand1.push(randPokemon);
		}

		let winner = <span className="Pokegame_winner">Winning Hand!</span>;

		let loser = <span className="Pokegame_loser">Losing Hand!</span>;

		let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

		let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);



		return (
			<div className="Pokegame">
				<Pokedata pokemon={hand1} exp={exp1} isWinner={exp1 > exp2 ? (winner) : (loser) } />
				<Pokedata pokemon={hand2} exp={exp2} isWinner={exp2 > exp1 ? (winner) : (loser)} />
			</div>
		)	
	}
}

export default Pokegame;