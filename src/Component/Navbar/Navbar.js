import { React } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
function Navbar(){
    
    return(
        <div className="main-container">
            <div className="heading"><Link to="/"><h1>The Post App</h1></Link></div>
            <div className="create"><Link to="/create"><h2>Create Post</h2></Link></div>
        </div>
    )
}

export default Navbar