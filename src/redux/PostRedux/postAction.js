import axios from 'axios'

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const LOAD_CURRENT_POST = 'LOAD_CURRENT_POST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';

export const fetchPostsrequest = ()=>{
    return{
        type:FETCH_POSTS_REQUEST
    }
}

export const fetchPostsFailure = (err)=>{
    return{
        type:FETCH_POSTS_FAILURE,
        payload:err
    }
}

export const fetchPostsSuccess = (posts)=>{
    // console.log(posts);
    return{
        type:FETCH_POSTS_SUCCESS,
        payload:posts
    }
}

export const loadCurrentPost = (post) => {
    return {
      type: LOAD_CURRENT_POST,
      payload: post,
    };
  };

export const createPostSucees = (post)=>{
    return{
        type:CREATE_POST_SUCCESS,
        payload:post
    }
}

export const fetchPost=()=>{
    return async (dispatch)=>{
        dispatch(fetchPostsrequest())
        try{
            let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            let posts = res.data;
            dispatch(fetchPostsSuccess(posts))
        }
        catch(e)
        {
            let errorMsg = e.message;
            dispatch(fetchPostsFailure(errorMsg))
        }

    }
}