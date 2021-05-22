import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './Pokedata.css'
class Pokedata extends Component {
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
		// let title;
		
		// if (this.props.isWinner)
		// {
		// 	title = <h1 className="Pokedata_winner">Winner</h1>;
		// }
		// else {
		// 	title = <h1 className="Pokedata_loser">Loser</h1>;
		// }
		return (
			<div className="Pokedata">
				<div className="Pokedata_data">
					{this.props.isWinner}
					<span className="Pokedata_data_exp">experience: {this.props.exp}</span>
				</div>
				<div className="Pokedata_cards">
				{
					(this.props.pokemon.map((p) => (
						<Pokedex
							id={p.id}
							name={p.name}
							type={p.type}
							epx={p.base_experience}
						/>

					)))
				}
				</div>
			</div>
		);
	}
}

export default Pokedata;