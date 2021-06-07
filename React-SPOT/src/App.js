import "./App.css";
import {useState} from "react";
import {useEffect} from "react";

//import axios from 'axios';

import ObjectivesSearchFrom from './Components/ObjectivesSearchForm';
import ObjectivesList from "./Components/ObjectivesList";

let objectives = require('./objectives.json');
// let objectives = [];

function App() {
  console.log("App function executed.");

  // useEffect(() => {
  //   console.log("useEffect called");

  //   const fakeObjectives = [
  //     {
  //     "id": 72,
  //     "type": "learning",
  //     "question": "What is Test Driven Development?",
  //     "answer": "Tests are written before the code. The tests make the expectations of the code explicit. Red - Green - Refactor are the stages of code development. You make the code work (pass the tests!) and then you can refactor the code, safe in the knowledge that the code is relatively easily testable.",
  //     "sort": 0,
  //     "day_id": 6
  //     },
  //     {
  //     "id": 73,
  //     "type": "performance",
  //     "question": "What is Mocha?",
  //     "answer": "Mocha is a testing framework. It looks for test files to run in the ./test/ folder.",
  //     "sort": 1,
  //     "day_id": 6
  //     },
  //     {
  //     "id": 74,
  //     "type": "learning",
  //     "question": "What is Chai?",
  //     "answer": "Chai is an assertion library. It defines a large number of assertions useful for testing.",
  //     "sort": 2,
  //     "day_id": 6
  //     },
  //   ];

  //   setSourceObjectives(fakeObjectives);

  //   // // retrieve user information from an API and update local state with the response
  //   // fetch(`http://localhost:7865/json`)
  //   //   .then(res => res.json())
  //   //   .then(json => {
  //   //     objectives = json;
  //   //   })
  //   //   .catch(err=>alert('err:'+err));
  // },[]);

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

  const [filteredObjectives,setFilteredObjectives] = useState(objectives);
  const [sourceObjectives,setSourceObjectives] = useState([]);

  const newSearchDetails = (details) => {
    setSearchDetails({...details});
    const newObjectivesArray = [];
    objectives.forEach((item)=>{
      // console.log('item:',item);
      // console.log('details:',details);
      const calculatedWeek = Math.floor(item.day_id / 5) + 1;
      const specifiedWeek = parseInt(details.week, 10);
      // console.log("calculatedWeek:",calculatedWeek);
      // console.log("specifiedWeek",specifiedWeek);
      // console.log(calculatedWeek === specifiedWeek);
      if (
        ( item.type === details.type || details.type === 'all' )
        &&
        ( item.day_id % 5 === parseInt(details.day, 10) || details.day === 0)
        &&
        ( calculatedWeek === specifiedWeek || details.week === 0 )
        ) {
        newObjectivesArray.push(item);
      }
    });
    setFilteredObjectives(newObjectivesArray);
  };

  return (
    <div className="App">
      <h2>SPOTlight</h2>
      <ObjectivesSearchFrom searchDetails={searchDetails} newSearchDetails={newSearchDetails} />
      <ObjectivesList objectives={filteredObjectives} />
    </div>
  );
}

export default App;
