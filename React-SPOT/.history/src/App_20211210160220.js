import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ObjectiveBrowser from "./Components/ObjectiveBrowser";

function App() {
  console.log("App function executed.");

  return (
    <div className="App">
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

          {/* <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/instructor" element={<h2>Instructor View</h2>}>
            </Route>
            <Route path="/student" element={<h2>Student View</h2>}>
            </Route>
            <Route path="/" element={<ObjectiveBrowser/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
