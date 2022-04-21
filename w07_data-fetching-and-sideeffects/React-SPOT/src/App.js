import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import ObjectivesSearchFrom from "./Components/ObjectivesSearchForm";
import ObjectivesList from "./Components/ObjectivesList";

// import axios from 'axios';
const objectives = require('./objectives.json');

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
  const [sourceObjectives, setSourceObjectives] = useState(objectives);
  const [filteredObjectives, setFilteredObjectives] = useState([]);

  //
  // Utility callback for onChange to call
  //
  const newSearchDetails = (details) => {
    setSearchDetails({ ...details }); 
  };

  // // hook that fires only after the initial render, to load the source objectives
  // useEffect(() => {
  //   console.log("useEffect called");

  //   if (true){
  //     fetch('/json')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("data:",data);
  //       setSourceObjectives(data);
  //       setFilteredObjectives(data);
  //     })
  //     .catch(err => console.log("err:",err));
  //   } else {
  //     axios.get('/json')
  //     .then(res => {
  //       console.log("data:",res.data);
  //       setSourceObjectives(res.data);
  //       setFilteredObjectives(res.data);
  //     })
  //     .catch(err => console.log("err:",err));  
  //   }
  // }, []);

  // // witness what happens when the sourceObjectives are updated asynchronously
  useEffect(() => {
    console.log("useEffect 2 called");

    const newObjective = [
      {
        id: 0,
        type: "mind blown!",
        question: "What is the answer to Life, The Universe, and Everything?",
        answer:
          "42",
        sort: 0,
        day_id: 6,
      },
    ];
    setTimeout(() => {
      setSourceObjectives((source) => [...source, ...newObjective]);
    }, 5555);
  }, []);

  // a hook for whenever these change: [sourceObjectives, searchDetails] 
  useEffect(() => {
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
      <ObjectivesSearchFrom
        searchDetails={searchDetails}
        newSearchDetails={newSearchDetails}
      />
      <ObjectivesList objectives={filteredObjectives} />
    </div>
  );
}

export default App;
