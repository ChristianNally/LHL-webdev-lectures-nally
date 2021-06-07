import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

import axios from 'axios';

import ObjectivesSearchFrom from "./Components/ObjectivesSearchForm";
import ObjectivesList from "./Components/ObjectivesList";

let objectives = require("./objectives.json");
// let objectives = [];

function App() {
  console.log("App function executed.");

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

  useEffect(() => {
    console.log("useEffect 2 called");

    const newObjective = [
      {
        id: 772,
        type: "learning",
        question: "What is Test Driven Development?",
        answer:
          "Tests are written before the code. The tests make the expectations of the code explicit. Red - Green - Refactor are the stages of code development. You make the code work (pass the tests!) and then you can refactor the code, safe in the knowledge that the code is relatively easily testable.",
        sort: 0,
        day_id: 6,
      },
    ];
    setTimeout(() => {
      setSourceObjectives((source) => [...source, ...newObjective]);
      newSearchDetails(searchDetails);
    }, 5555);
  }, []);

  // THIS IS NOT WORKING. CAN I CALL useEffect here?
  // axios.get(`http://localhost:7865/json`)
  // .then(res => {
  //   objectives = res.data;
  //   return;
  // });

  const [searchDetails, setSearchDetails] = useState({
    week: 0,
    day: 0,
    type: "all",
    search: "",
  });

  const [sourceObjectives, setSourceObjectives] = useState(objectives);
  const [filteredObjectives, setFilteredObjectives] = useState([
    {
      id: 74,
      type: "learning",
      question: "What is Chai Actually?",
      answer:
        "Chai is an assertion library. It defines a large number of assertions useful for testing.",
      sort: 2,
      day_id: 6,
    },
  ]);

  const newSearchDetails = (details) => {
    setSearchDetails({ ...details });
  };

  useEffect(() => {
    const newObjectivesArray = sourceObjectives.filter((item) => {
      // console.log('item:',item);
      // console.log('details:',details);
      const calculatedWeek = Math.floor(item.day_id / 5) + 1;
      const specifiedWeek = parseInt(searchDetails.week, 10);
      // console.log("calculatedWeek:",calculatedWeek);
      // console.log("specifiedWeek",specifiedWeek);
      // console.log(calculatedWeek === specifiedWeek);
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
      <ObjectivesSearchFrom
        searchDetails={searchDetails}
        newSearchDetails={newSearchDetails}
      />
      <ObjectivesList objectives={filteredObjectives} />
    </div>
  );
}

export default App;
