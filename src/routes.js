import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue'

export const routes = [
    { path: '', name: 'home', component: Home, titulo: 'Principal', menu: true },
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro de Fotos', menu : true },
    { path: '*', component: Home, menu: false}
];