import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Switch, Router, Route, Link} from "react-router-dom";

import axios from 'axios';

import ObjectivesSearchFrom from "./Components/ObjectivesSearchForm";
import ObjectivesList from "./Components/ObjectivesList";

function App() {
  console.log("App function executed.");

  //
  // State
  //
  const [searchDetails, setSearchDetails] = useState({
    week: 0,
    day: 0,
    type: "all",
    search: "",
  });
  const [sourceObjectives, setSourceObjectives] = useState([]);
  const [filteredObjectives, setFilteredObjectives] = useState([]);

  //
  // Utility callback for onChange to call
  //
  const newSearchDetails = (details) => {
    setSearchDetails({ ...details });
  };

  // hook that fires only after the initial render, to load the source objectives
  useEffect(() => {
    console.log("useEffect called");

    if (true){
      fetch('/json')
      .then(res => res.json())
      .then(data => {
        console.log("data:",data);
        setSourceObjectives(data);
        setFilteredObjectives(data);
      })
      .catch(err => console.log("err:",err));
    } else {
      axios.get('/json')
      .then(res => {
        console.log("data:",res.data);
        setSourceObjectives(res.data);
        setFilteredObjectives(res.data);
      })
      .catch(err => console.log("err:",err));  
    }
  }, []);

  // a hook for whenever these change: [sourceObjectives, searchDetails] 
  useEffect(() => {
    console.log('refilter useEffect called');
    const newObjectivesArray = sourceObjectives.filter((item) => {
      const calculatedWeek = Math.floor(item.day_id / 5) + 1;
      const specifiedWeek = parseInt(searchDetails.week, 10);
      if (
        (item.type === searchDetails.type || searchDetails.type === "all") &&
        (item.day_id % 5 === parseInt(searchDetails.day, 10) ||
          searchDetails.day === 0) &&
        (calculatedWeek === specifiedWeek || searchDetails.week === 0)
      ) {
        return true;
      }
      return false;
    });
    setFilteredObjectives(newObjectivesArray);
  }, [sourceObjectives, searchDetails]);

  return (
    <div className="App">
      <h2>SPOTlight</h2>
      <Switch>
        <Router>
          <Link to='/' exact>Home</Link>
          <Link to='/objectives'>The Objectives List</Link>
          <Link to='/login' exact>Login/Register</Link>
        </Router>
      </Switch>

      <Route path="/" exact>
        <h1>Home Page</h1>
      </Route>

      <Route path="/objectives" exact>
        <ObjectivesSearchFrom
          searchDetails={searchDetails}
          newSearchDetails={newSearchDetails}
        />
        <ObjectivesList objectives={filteredObjectives} />
      </Route>
    </div>
  );
}

export default App;
