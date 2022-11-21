import Home from "./components/Home.vue";
import User from "./components/user/User.vue";
import UserStart from "./components/user/UserStart.vue";
import UserDetail from "./components/user/UserDetail.vue";
import UserEdit from "./components/user/UserEdit.vue";
import Header from "./components/Header.vue"

export const routes = [
    {
        path : '/', name : 'anasayfa', components : {
            default: Home,
            "header-top" : Header,
        } },
    { path : '/user', name : 'kullanici',
        components : {
            default : User,
            "header-bottom" : Header,
        },
        children : [
            {path : '', component : UserStart }, //user
            {
                path : ':id', component : UserDetail, beforeEnter : (to,from,next) => {
                    console.log("Route Seviyesinde Kontrol!!!");
                    next();
                } }, // /user/12

            {path : ":id/edit", component: UserEdit, name: "userEdit" }, // user/12/edit
        ]
    },
    { path : "/redirect", redirect : { name : "/user" } },
    { path : "*", redirect: "/"},
]