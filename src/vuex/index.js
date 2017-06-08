import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
/* eslint-disable no-new*/

const state={
	article_kind:["HTML5","Cavas","React","Vue","Webpack","Node"]
}

const mutations = {
	addage () {
		state.age ++
	},
	subage() {
		state.age --
	}
}

const actions = {
	addagepro (a) {
		alert(1);
		// console.log(a);
		// a.commit("addage")
	}
}
export default new Vuex.Store({
	state,
	mutations,
	actions
})