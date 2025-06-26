import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../pages/Inicio.vue';

const rotas = [
  { path: '/', component: Inicio, name: 'Inicio' },
];

const roteador = createRouter({
  history: createWebHistory(),
  routes: rotas,
});

export default roteador;

