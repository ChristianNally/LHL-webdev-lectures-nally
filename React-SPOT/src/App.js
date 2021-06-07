import "./App.css";
import {useState} from "react";
//import axios from 'axios';

import ObjectivesSearchFrom from './Components/ObjectivesSearchForm';
import ObjectivesList from "./Components/ObjectivesList";

const objectives = require('./objectives.json');

function App() {
  console.log("App function executed.");

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

  const newSearchDetails = (details) => {
    setSearchDetails({...details});
    const newObjectivesArray = [];
    objectives.forEach((item)=>{
      console.log('item:',item);
      if (item.type === details.type || details.type === 'all') {
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
