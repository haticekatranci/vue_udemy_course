import Home from "./components/Home.vue";
import User from "./components/user/User.vue";

export const routes = [
    { path : '', component : Home , name : 'anasayfa' },
    { path : '/user/:id', component: User, name : 'kullanici' }
]