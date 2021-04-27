import logo from './logo.svg';
import './App.css';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
//import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
//import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import EditEmployee from './components/EditEmployee';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DashBoard from './components/DashBoard';
//import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployee from './components/AddEmployee';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
//import CreateEmployeeComponent from './components/CreateEmployeeComponent';
//import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
//import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
  return (
    <div>
    <Router>
          <HeaderComponent />
            <div className="container">
                <Switch> 
                      <Route path = "/" component={DashBoard} exact={true}></Route>
                      <Route path = "/employees" component={DashBoard} ></Route>
                      <Route path="/addemp" component={AddEmployee} />
                      <Route path="/empadd/:id" component={AddEmployee} />
                      <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                      <Route path = "/edit" component = {EditEmployee}></Route>
                     
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                      
                          




                     
                </Switch>
            </div>
          <FooterComponent />
    </Router>
</div>
  );
}

export default App;
