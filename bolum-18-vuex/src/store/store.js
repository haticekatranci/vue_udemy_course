import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import * as mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter : 0
  },
  getters : {
    getDoubleCounter(state){
      return state.counter * 2;
    },
    stringCounter(state){
      return state.counter + ".kez Tıklandı" ;
    }
  },
  mutations :{
    increaseCounter(state ){
      state.counter++;
    },
    decreaseCounter(state ){
      state.counter--;
    },

  },

});
