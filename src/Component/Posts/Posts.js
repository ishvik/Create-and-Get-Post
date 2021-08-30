import { React, useEffect } from 'react'
import "./Posts.css"
import { connect } from 'react-redux';
import Post from "../Post/Post"
import { fetchPost } from '../../redux/PostRedux/postAction';

function Posts({posts,fetchPost}){
    useEffect(()=>{
        fetchPost();
    },[])

    return(
        <div className="AllPosts">
            {posts.map((post)=>(
                <Post key={posts.id} post={post}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        posts:state.posts
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        fetchPost:()=>dispatch(fetchPost())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);