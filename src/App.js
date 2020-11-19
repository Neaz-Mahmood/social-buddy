import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import Comment from './Component/Comment/Comment';

function App() {
  return (
    <div>
      <Router>
       <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/posts/:postId">
            <Comment />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
