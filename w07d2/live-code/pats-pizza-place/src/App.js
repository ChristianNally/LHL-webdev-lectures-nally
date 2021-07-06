import {useState, useEffect} from 'react';
import Header from './components/Header';
import Pizza from './components/Pizza';
import ChildOne from './components/ChildOne';
import './App.css';

function App() {

  const [heading] = useState(`Pat's Pizza Place`);
  const [day,setDay] = useState('Tuesday');

  const returningString = () => {
    return heading;
  };

  const updateDay = (newDay) => {
    const validDays = ['Monday','Tuesday', 'Wednesday'];
    if (validDays.includes(newDay)){
      setDay(newDay);
    } else {
      setDay('day not found');
    }
  }

  useEffect(()=>{    
    // check if i have an open web socket
    // if so, use it.
    console.log("heading side effects go here.");
    return (()=>{
      // this is the code that would get executed, if this sideEffect collection
      // needed to be cleaned up.
      // close the web socket.
    });
  },[heading]);

  useEffect(()=>{
    console.log("day side effects go here.");
  },[day]);

  return (
    <div className="App">
      <h2>The Parent App's Day is "{day}"</h2>
      <Header message="Hello World" heading={ returningString() } />
      <ChildOne setDay={updateDay}/>
      <Pizza />
    </div>
  );

}

export default App;
