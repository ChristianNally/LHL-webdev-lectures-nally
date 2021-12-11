import { useEffect, useState } from 'react';
import ObjectivesList from "./ObjectivesList";
import axios from 'axios';

const ObjectiveBrowser = () => {
  //
  // State
  //
  const [searchDetails, setSearchDetails] = useState({
    week: 0,
    day: 0,
    type: "all",
    search: "",
  });
  const [sourceObjectives, setSourceObjectives] = useState([]);
  const [filteredObjectives, setFilteredObjectives] = useState([]);

  //
  // Utility callback for onChange to call
  //
  const newSearchDetails = (details) => {
    console.log('executing newSearchDetails');
    setSearchDetails({ ...details }); // as-is the incoming details array must set all values
  };

  // hook that fires only after the initial render, to load the source objectives
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

  // // witness what happens when the sourceObjectives are updated asynchronously
  // useEffect(() => {
  //   console.log("useEffect 2 called");

  //   const newObjective = [
  //     {
  //       id: 0,
  //       type: "learning",
  //       question: "What is Test Driven Development?",
  //       answer:
  //         "Tests are written before the code. The tests make the expectations of the code explicit. Red - Green - Refactor are the stages of code development. You make the code work (pass the tests!) and then you can refactor the code, safe in the knowledge that the code is relatively easily testable.",
  //       sort: 0,
  //       day_id: 6,
  //     },
  //   ];
  //   setTimeout(() => {
  //     setSourceObjectives((source) => [...source, ...newObjective]);
  //   }, 5555);
  // }, []);

  // a hook to update the filterObjectives state 
  // whenever these change: [sourceObjectives, searchDetails] 
  useEffect(() => {
    console.log('searchDetails inside useEffect:',searchDetails);
    const newObjectivesArray = sourceObjectives.filter((item) => {
      const calculatedWeek = Math.floor(parseInt(item.day_id) / 5) + 1;
      const specifiedWeek = parseInt(searchDetails.week, 10);
      const lowerCaseStringToSearch = item.question.toLowerCase() + item.answer.toLowerCase();

      if (
        (item.type === searchDetails.type || searchDetails.type === "all") 
        && (parseInt(item.day_id) % 5 === parseInt(searchDetails.day, 10) || parseInt(searchDetails.day) === 0) 
        && (calculatedWeek === specifiedWeek || parseInt(searchDetails.week) === 0)
        && (searchDetails.search === undefined || (lowerCaseStringToSearch.includes(searchDetails.search.toLowerCase())))
      ) {
        return true;
      }
      return false;
    });
    setFilteredObjectives(newObjectivesArray);
  }, [sourceObjectives, searchDetails]);

  return (
    <div>
      <ObjectivesList objectives={filteredObjectives} searchDetails={searchDetails} newSearchDetails={newSearchDetails} />
    </div>
  );
};

export default ObjectiveBrowser;