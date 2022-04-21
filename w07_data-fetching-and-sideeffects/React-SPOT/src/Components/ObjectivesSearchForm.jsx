const ObjectivesSearchForm = (props) => {
  console.log("ObjectivesSearchForm function executed: props=",props);

  return (
    <div className="ObjectivesSearchForm">
      <form>

        <select id="week" name="week" onChange={(event)=>props.newSearchDetails({...props.searchDetails, week: event.target.value})}>
          <option value="0">All Weeks</option>
          <option value="1">Week 1</option>
          <option value="2">Week 2</option>
          <option value="3">Week 3</option>
          <option value="4">Week 4</option>
          <option value="5">Week 5</option>
          <option value="6">Week 6</option>
          <option value="7">Week 7</option>
          <option value="8">Week 8</option>
        </select>

        <select id="day" name="day"  onChange={(event)=>props.newSearchDetails({...props.searchDetails, day: event.target.value})}>
          <option value="0">All Days</option>
          <option value="1">Day 1</option>
          <option value="2">Day 2</option>
          <option value="3">Day 3</option>
          <option value="4">Day 4</option>
          <option value="5">Day 5</option>
        </select>

        <select id="type" name="type" onChange={(event)=>props.newSearchDetails({...props.searchDetails, type: event.target.value})}>
          <option value="all">All Objective Types</option>
          <option value="learning">Learning Objectives</option>
          <option value="performance">Performance Objectives</option>
        </select>

        {/* <input name="search" onChange={()=>props.newSearchDetails({monkey: 'fuzz'})} type="text" size="30" placeholder="keywords or search strings" /> */}

        <button type="reset" onClick={()=>props.newSearchDetails({
          week: 0,
          day: 0,
          type: "all",
          search: "",
        })}>Reset</button>

      </form>
    </div>
  );
};

export default ObjectivesSearchForm;
