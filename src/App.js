/*
 * Purpose : This is Main Page for Routing
 * Devlopers : Narendra,Rachana,supriya, swathi
 */

import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home/home";
import TrendingJobs from "./components/employee/TrendingJobs/trendingJobs";
import JobGuide from "./components/employee/JobGuide/jobGuide";
import JobProbability from "./components/employee/JobProbability/jobProbability";
import EmployeeDashboard from "./components/employee/Dashboard/dashboard";
import Welcome from "./components/Welcome/welcome";


//css for adding styles
import "./components/Home/App.css";
import Post from "./components/employee/ApplyJob/post";

// import Home from './components/home';
// import EmployerHome from "./components/employer/Home/home";
import Platform from "./components/employer/Company/company";
import Rating from "./components/employer/Dashboard/rating";

import Submit from "./components/employer/CreateJob/createpost";
import EmployerDashboard from "./components/employer/Dashboard/dashboard";
import EmployerHome from "./components/employer/Home/employerHome";
import PostJob from "./components/employer/CreateJob/postjob";



//App component
function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/trending" component={TrendingJobs}></Route>
          <Route exact path="/jobGuide" component={JobGuide}></Route>
          <Route exact path="/post" component={Post}></Route>
          <Route exact path="/employeeDashboard" component={EmployeeDashboard}></Route>
          <Route exact path="/" component={Welcome}></Route>

          <Route
            exact
            path="/JobProbability"
            component={JobProbability}
          ></Route>

          <Route exact path="/employerHome" component={EmployerHome}></Route>
          <Route exact path="/platform" component={Platform}></Route>
          <Route exact path="/createpost" component={Submit}></Route>
          <Route exact path="/employerDashboard" component={EmployerDashboard}></Route>
          <Route exact path="/rating" component={Rating}></Route>
          <Route exact path="/postjob" component={PostJob}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
