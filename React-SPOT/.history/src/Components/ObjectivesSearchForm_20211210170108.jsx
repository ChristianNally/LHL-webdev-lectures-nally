const ObjectivesSearchForm = (props) => {
  console.log("ObjectivesSearchForm function executed: props=",props);

  return (
    // <div className="ObjectivesSearchForm">
      <tr>
        <td>
          <select id="week" name="week" onChange={(event)=>props.newSearchDetails({...props.searchDetails, week: event.target.value})}>
            <option value="0">All</option>
            <option value="1">W1</option>
            <option value="2">W2</option>
            <option value="3">W3</option>
            <option value="4">W4</option>
            <option value="5">W5</option>
            <option value="6">W6</option>
            <option value="7">W7</option>
            <option value="8">W8</option>
          </select>
          <select id="day" name="day"  onChange={(event)=>props.newSearchDetails({...props.searchDetails, day: event.target.value})}>
            <option value="0">All Days</option>
            <option value="1">Day 1</option>
            <option value="2">Day 2</option>
            <option value="3">Day 3</option>
            <option value="4">Day 4</option>
            <option value="5">Day 5</option>
          </select>
        </td>
        <td>
          <select id="type" name="type" onChange={(event)=>props.newSearchDetails({...props.searchDetails, type: event.target.value})}>
            <option value="all">All Objective Types</option>
            <option value="learning">Learning (Theory) Objectives</option>
            <option value="performance">Performance (Practical Coding) Objectives</option>
          </select>
        </td>
        <input name="search" onChange={(event)=>props.newSearchDetails({...props.searchDetails, search: event.target.value})} type="text" size="30" placeholder="keywords or search strings" />
        <button type="reset" onClick={()=>props.newSearchDetails({
          week: 0,
          day: 0,
          type: "all",
          search: "",
        })}>Reset</button>
      </tr>
    // </div>
  );
};

export default ObjectivesSearchForm;
