import Vue from "vue"
const state = {
    products : []
}
const getters = {
    getProducts(state){
        return state.products;
    },
    getProduct(state){
    }
}
const mutations = {
    updateProductList(state,product){
        state.products.push(product);
    }
}
const actions = {
    initApp({ commit }){
        //Vue resource işlemleri...
    },
    saveProduct({ dispatch, commit }, product){
        //Vue resource işlemleri...
        Vue.http.post("https://urun-islemleri-prod-fdfde-default-rtdb.firebaseio.com/products.json", product)
            .then((response) => {
                ////******* Ürün Lİstesinin Güncellenmesi   ******///////
                product.id = response.body.name;
                commit("updateProductList", product);
                ////*******Alış Satış BAkiye Bilgilerinin Güncellenmesi ********/////
                let tradeResult = {
                    purchase : product.price,
                    sale : 0,
                    count : product.count,
                }
                dispatch("setTradeResult", tradeResult)
            })

    },
    sellProduct({ commit } ,payload){
        //Vue resource işlemleri...
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}