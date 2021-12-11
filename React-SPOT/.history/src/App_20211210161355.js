import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ObjectiveBrowser from "./Components/ObjectiveBrowser";
import InstructorView from "./Components/InstructorView";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Learning Objective Browser</Link></li>
            <li><Link to="/instructor">Instructor's View</Link></li>
            <li><Link to="/student">Student's View</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/instructor" element={<InstructorView/>}></Route>
          <Route path="/student" element={<StudentView/>}></Route>
          <Route path="/" element={<ObjectiveBrowser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;