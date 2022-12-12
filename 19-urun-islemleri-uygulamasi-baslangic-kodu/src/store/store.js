import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/product";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";


Vue.use(Vuex);

export const store = new Vuex.Store({
   state : {
       purchase : 0.0,//satın alınan set edilecek alan
       sale : 0.0, //ürün çıkışıyla arttırılacak alan
       balance : 0.0, //sale dan purchase e çıkartılacak alan

   },
    getters,
    mutations,
    actions,
    modules : {
       product
    },
});