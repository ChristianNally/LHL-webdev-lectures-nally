import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    console.log('executing newSearchDetails');
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

  // // witness what happens when the sourceObjectives are updated asynchronously
  // useEffect(() => {
  //   console.log("useEffect 2 called");

  //   const newObjective = [
  //     {
  //       id: 0,
  //       type: "learning",
  //       question: "What is Test Driven Development?",
  //       answer:
  //         "Tests are written before the code. The tests make the expectations of the code explicit. Red - Green - Refactor are the stages of code development. You make the code work (pass the tests!) and then you can refactor the code, safe in the knowledge that the code is relatively easily testable.",
  //       sort: 0,
  //       day_id: 6,
  //     },
  //   ];
  //   setTimeout(() => {
  //     setSourceObjectives((source) => [...source, ...newObjective]);
  //   }, 5555);
  // }, []);

  // a hook for whenever these change: [sourceObjectives, searchDetails] 
  useEffect(() => {
    console.log('searchDetails inside useEffect:',searchDetails);
    const newObjectivesArray = sourceObjectives.filter((item) => {
      const calculatedWeek = Math.floor(parseInt(item.day_id) / 5) + 1;
      const specifiedWeek = parseInt(searchDetails.week, 10);
      if (
        (item.type === searchDetails.type || searchDetails.type === "all") 
        && (parseInt(item.day_id) % 5 === parseInt(searchDetails.day, 10) || parseInt(searchDetails.day) === 0) 
        && (calculatedWeek === specifiedWeek || parseInt(searchDetails.week) === 0)
        && (searchDetails.search === undefined || (item.question.includes(searchDetails.search)))
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
      <ObjectivesSearchFrom
        searchDetails={searchDetails}
        newSearchDetails={newSearchDetails}
      />
      <ObjectivesList objectives={filteredObjectives} />

      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Learning Objective Browser</Link>
            </li>
            <li>
              <Link to="/instructor">Instructor's View</Link>
            </li>
            <li>
              <Link to="/student">Student's View</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/instructor">
            <React.Fragment>
            <h2>Instructor View</h2>
            </React.Fragment>
          </Route>
          <Route path="/student">
            <React.Fragment>
              <h2>Student View</h2>
            </React.Fragment>
          </Route>
          <Route path="/">
            <React.Fragment>
              <h2>Learning Objective Browser</h2>
            <React.Fragment>
          </Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
