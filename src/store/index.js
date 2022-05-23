import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'

Vue.use(Vuex)

let defaultCity = '上海'
try{
    if (localStorage.city){
        defaultCity = localStorage.city 
    }
} catch (e) {
    defaultCity = '上海'
}

export default new Vuex.Store({
    // state,
    state: {
        city: defaultCity
    },
    actions: {
        changeCity (ctx, city){
            ctx.commit('changeCity', city)
        }
    },
    // mutations
    mutations: {
        changeCity(state , city ) {
            state.city = city
            try{
                localStorage.city = city 
            } catch (e) {
                defaultCity = '上海'
                }
            }
        }

})