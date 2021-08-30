import { React } from 'react';
import "./Post.css"
import { loadCurrentPost } from '../../redux/PostRedux/postAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Post({post,loadCurrentPost}){
    const history = useHistory();
    const handleOnClick = ()=>{
        console.log(post);
        loadCurrentPost(post);
        history.push(`/post/${post.id}`)
    }
    const title = post.title.toUpperCase();
    return(
        <div className="postContainer">
            <div className="postTitle">
                <h1>Title:</h1>
                <h3>{title}</h3>
            </div>
            <div className="view"><button type="text" onClick={handleOnClick}>View Post</button></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loadCurrentPost:(post)=>dispatch(loadCurrentPost(post)),
    };
};

export default connect(null,mapDispatchToProps)(Post)