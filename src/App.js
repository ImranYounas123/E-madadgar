import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Header from './Components/Header/Header'
import LoginRegister from './Components/Authentication/UserAuth/LoginRegister';
import SignUp from './Components/Authentication/UserAuth/SignUp';
import { Home } from './Components/Home/Home';
import OrgHome from './Components/OrganizationComponents/OrgHomePage/OrgHome';
function App() {
  return (
    <div className="App">
    <Router>
      
    <Route exact path="/home" component= {Home}/>
    <Route exact path="/" component={LoginRegister}/>
    <Route exact path="/register" component={SignUp}/>
    <Route exact path="/OrgHome" component={OrgHome}/>
    {/* <Route exact path="/login" component={}/>
    {/* <Footer /> */}
    {/* <LoginRegister /> */}
  </Router>
    </div>
  );
}

export default App;
