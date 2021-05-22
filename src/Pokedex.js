// @ts-nocheck
import React, { Component } from "react";
import './Pokedex.css';
// const Poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const Poke_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
// const pokemons = [
// 	{ id: 4, name: "Charmender", type: "Fire", base_experience: 72, img: "/low_imgs/charmender.png" },
// 	{ id: 7, name: "Squirtle", type: "Water", base_experience: 63, img: "/low_imgs/squirtle.png" },
// 	{ id: 11, name: "Metapod", type: "Bug", base_experience: 62, img: "/low_imgs/metapod.png" },
// 	{ id: 12, name: "Butterfree", type: "Flying", base_experience: 178, img: "/low_imgs/butterfree.png" },
// 	{ id: 25, name: "Pikachu", type: "Electric", base_experience: 225, img: "/low_imgs/pikachu.png" },
// 	{ id: 39, name: "Jigglypuff", type: "Normal", base_experience: 95, img: "/low_imgs/jigglypuff.png" },
// 	{ id: 94, name: "Gengar", type: "Poison", base_experience: 325, img: "/low_imgs/genger.png" },
// 	{ id: 133, name: "Eevee", type: "Normal", base_experience: 65, img: "/low_imgs/eevee.png" },
// ];

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokedex extends Component {
	render() {
		let imgSrc = `${Poke_API}${padToThree(this.props.id)}.png`;
		return (
			<div className="Pokedex">
				<div className="Pokedex_card_body">
					<h1 className="Pokedex_title">{this.props.name}</h1>
					<div className="Pokedex_img">
						<img src={imgSrc} alt="" />
					</div>
					<p className="Pokedex_data">Type: {this.props.type}</p>
					<p className="Pokedex_data">EXP: {this.props.epx}</p>
				</div>
			</div>
		);
	}
}


export default Pokedex;