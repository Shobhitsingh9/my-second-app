import Vuex from 'vuex'

const createStore =() => {
    return new Vuex.Store({
        state: {
            loadedPosts:[]
        },
     mutations:{
        setPosts(state,posts) {
            state.loadedPosts = posts
        }
     },
     actions:{
        setPosts(VuexContext,posts) {
            VuexContext.commit('SetPosts',posts)
        }
     },
     getters: {
        loadedPosts(state){
            return state.loadedPosts
        }
     }   
    })
}

export default createStore