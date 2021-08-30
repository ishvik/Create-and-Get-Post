import React, { useState } from "react";
import "./Createpost.css"
import { createPostSucees } from "../../redux/PostRedux/postAction";

function Createpost({createPostSucees}){
    const [title,setTitle] = useState(" ");
    const [desc,setDesc] = useState(" ");
    const handleOnChangeTitle = (e)=>{
        setTitle(e.target.value);
    }

    const handleOnChangeDesc= (e)=>{
        setDesc(e.target.value);
    }

    const handleonClick = ()=>{
        createPostSucees();
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
            <button type="submit" className="btn" onClick={handleonClick}>Create Post</button>
        </div>
        </div>
    )
}

const mapDispatchToPrope = dispatch=>{
    return{
        createPostSucees:()=>dispatch(createPostSucees())
    }
}

export default Createpost