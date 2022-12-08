import './App.css';
import ListEmployee from './Components/ListEmployee';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import EmployeeData from './Components/EmployeeData';
import viewEmployee from './Components/ViewEmployee';
import UserList from './exerciseOne/UserList'
// import UserList from './exerciseOne/UserList';
import Reminder from './Components/Reminder';

function App() {
  return (
    <div>
      {/* <UserList /> */}
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployee}></Route>
            <Route path="/employees" component={ListEmployee}></Route>
            <Route path="/add-employee/:id" component={EmployeeData}></Route>

            {/* here iam matchin the id that employee detail will open */}

            <Route path="/view-employee/:id" component={viewEmployee}></Route>
          </Switch>
        </div>
      </Router>

<Reminder/>

    </div>
  );
}

export default App;
