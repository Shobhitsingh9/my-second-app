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
        nuxtServerInit(vuexContext, context) {
            if (!process.client) {
                console.log(context.req.session)
            }
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    vuexContext.commit('setPosts', [
                         {
                             id:'1', 
                         title:'First Post', 
                         previewText:"This is my first post", 
                         thumbnail:'https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg'
                         },
                         {id:'2', 
                         title:'Second Post', 
                         previewText:"This is my second post", 
                         thumbnail:'https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg'
                         }
                         ])
                         
                 resolve();
                },1000);
                
              });
        },

        setPosts(VuexContext,posts) {
            VuexContext.commit("SetPosts",posts)
        }
     },
     getters: {
        loadedPosts(state) {
            return state.loadedPosts
        }
     }   
    })
}

export default createStore