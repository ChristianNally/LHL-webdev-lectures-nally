const ObjectivesSearchForm = () => {
  console.log("ObjectivesSearchForm function executed.");
  return (
    <div className="ObjectivesSearchForm">
      <form>

        <select id="week">
          <option>All Weeks</option>
          <option>Week 1</option>
          <option>Week 2</option>
          <option>Week 3</option>
          <option>Week 4</option>
          <option>Week 5</option>
          <option>Week 6</option>
          <option>Week 7</option>
          <option>Week 8</option>
        </select>

        <select id="day">
          <option>All Days</option>
          <option>Day 1</option>
          <option>Day 2</option>
          <option>Day 3</option>
          <option>Day 4</option>
          <option>Day 5</option>
        </select>

        <select id="type">
          <option>All Objective Types</option>
          <option>Learning Objectives</option>
          <option>Performance Objectives</option>
        </select>

        <input type="text" size="30" placeholder="keywords or search strings" />

      </form>
    </div>
  );
};

export default ObjectivesSearchForm;
