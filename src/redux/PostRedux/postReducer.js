import { FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS, FETCH_POSTS_REQUEST, LOAD_CURRENT_POST, CREATE_POST_SUCCESS } from "./postAction";

const initialState = {
    loading:false,
    posts:[],
    error:'',
    currentPost:null
}

const postReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_POSTS_REQUEST: return{...state,loading:true}
        case FETCH_POSTS_SUCCESS:
            return {error:'',loading:false,posts:action.payload}
        case FETCH_POSTS_FAILURE:
            return {posts:[],loading:false,error:action.payload}
        case LOAD_CURRENT_POST:
            return {...state,currentPost:action.payload}
        case CREATE_POST_SUCCESS:
            let post = state.posts.map((el)=>el);
            post.push(action.payload);
            return{...state,posts:post}
        default: return state
    }
}

export default postReducer