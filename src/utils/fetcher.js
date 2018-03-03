import axios from 'axios';

const API_BASE = 'https://pokeapi.co/api/v2/';
const POKEMON = `${API_BASE}pokemon/`;

export const getList = () => (
	axios.get(POKEMON)
		.then(response => response.data)
);