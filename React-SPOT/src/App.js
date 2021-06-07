import "./App.css";
import {useState} from "react";

import ObjectivesSearchFrom from './Components/ObjectivesSearchForm';
import ObjectivesList from "./Components/ObjectivesList";

const objectives = require('./objectives.json');

function App() {
  console.log("App function executed.");

  const [searchDetails, setSearchDetails] = useState({});

  return (
    <div className="App">
      <h2>SPOTlight</h2>
      <ObjectivesSearchFrom searchDetails={searchDetails} setSearchDetails={setSearchDetails} />
      <ObjectivesList objectives={objectives}/>
    </div>
  );
}

export default App;
