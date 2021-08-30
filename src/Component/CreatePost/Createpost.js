import React, { useState } from "react";
import "./Createpost.css"
import { createPostSucees } from "../../redux/PostRedux/postAction";
import { connect } from "react-redux";
import {v4 as uuidv4} from 'uuid'

function Createpost({createPostSucees,posts}){
    const [title,setTitle] = useState(" ");
    const [desc,setDesc] = useState(" ");
    const handleOnChangeTitle = (e)=>{
        setTitle(e.target.value);
    }

    const handleOnChangeDesc= (e)=>{
        setDesc(e.target.value);
    }

    const HandleonClick = ()=>{
        const obj = {
            id:uuidv4(),
            title:title,
            body:desc
        }
        console.log(posts)
        createPostSucees(obj);
    }

    return(
        <div className="create-container">
        <div className="create-main">
            <div className="create-title">
                <h1>Enter Title:</h1>
                <input type="text" placeholder="title..." value={title} onChange={handleOnChangeTitle}></input>
            </div>
            <div className="create-content">
                <h1>Enter Description:</h1>
                <input type="text" placeholder="description..." value={desc} onChange={handleOnChangeDesc}/>
            </div>
            <button type="submit" className="btn" onClick={HandleonClick}>Create Post</button>
        </div>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        posts:state.posts
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        createPostSucees:(post)=>dispatch(createPostSucees(post))
    }
}

export default connect(null,mapDispatchToProps)(Createpost)