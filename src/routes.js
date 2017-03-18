import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue'

export const routes = [
    { path: '', component: Home, titulo: 'Principal' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro de Fotos' }
];