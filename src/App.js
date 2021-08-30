import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Posts from './Component/Posts/Posts';
import Single from './Component/SinglePost/Single';
import createPost from './Component/CreatePost/Createpost';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

function App({current}) {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Posts}/>
        <Route exact path="/create" component={createPost}/>
        {!current ? (
          <Redirect to="/"/>
        ):(
          <Route exact path="/post/:id" component={Single}/>
        )}
      </Switch>
    </div>
    </Router>
  );
}

const mapStateToProps = (state)=>{
  return{
    current:state.currentPost
  }
}

export default connect(mapStateToProps)(App);
