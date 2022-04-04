import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import RegisterUser from './components/RegisterUser';
import Profile from './components/Profile';
import AddPost from './components/AddPost';
import GetPost from './components/GetPost';
import Refresh from './components/Refresh';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/register' component={RegisterUser}/>
        <Route exact path='/user-profile' component={Profile}/>
        <Route exact path='/add-post' component={AddPost}/>
        <Route exact path='/get-post' component={GetPost}/>
        <Route exact path='/refresh' component={Refresh} />

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
