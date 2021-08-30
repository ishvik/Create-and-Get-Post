import { React } from 'react';
import { connect } from 'react-redux';
import "./single.css"

function Single({current}){
    return (
        <div className="container">
        <div className="main">
            <div className="title"><h1>Title:</h1><h2>{current.title}</h2></div>
            <div className="content"><p>{current.body}</p></div>
        </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        current:state.currentPost
    }
}

export default connect(mapStateToProps,null)(Single)