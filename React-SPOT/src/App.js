import "./App.css";

import ObjectivesSearchFrom from './Components/ObjectivesSearchForm';
import ObjectivesList from "./Components/ObjectivesList";

const objectives = require('./objectives.json');

function App() {
  console.log("App function executed.");

  return (
    <div className="App">
      <h2>SPOTlight</h2>
      <ObjectivesSearchFrom/>
      <ObjectivesList objectives={objectives}/>
    </div>
  );
}

export default App;
