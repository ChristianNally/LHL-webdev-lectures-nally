import './App.css';
import Header from './components/Header';
// import VisitorCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';
import ChildOne from './components/ChildOne';
import {useState} from 'react';

const App = () => {
  const [heading] = useState(`Pat's Pizza Place`);
  const [day, setDay] = useState('Friday');

  const returningString = () => {
    return heading;
  }

  const updateDay = (newDay) => {
    const validDays = ['Monday', 'Tuesday', 'Wednesday'];
    if (validDays.includes(newDay)) {
      setDay(newDay);
    } else {
      setDay('day not found');
    }
  };

  return (
    <div className="App">
      <h2>In the parent, day is "{day}"</h2>
      {/* <ChildOne setDay={setDay} /> */}
      <ChildOne setDay={updateDay} />
      <Header message="Hello World" heading={returningString()} />
      {/* <VisitorCounter /> */}
      <Pizza />
    </div>
  );
};

export default App;
