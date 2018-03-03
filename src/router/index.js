import Vue from 'vue';
import Router from 'vue-router';
import PokeList from '@/components/PokeList';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Pokelist',
			component: PokeList,
		},
	],
});
