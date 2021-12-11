const Objective = (props) => {
//  console.log("Objective function executed. props=" + JSON.stringify(props));

  const typeDisplay = (type) => {
    let typeText = "L";
    if (type === 'performance'){
      typeText = "P";
    }
    return typeText;
  };

  const dayDisplay = (description) => {
    return description.replace("Week ","W").replace(" Day ","D");
  };

  return (
    <tr className="Objective">
      {/* <td>{props.id}</td> */}
      <td>{dayDisplay(props.day_description)}</td>
      <td>{typeDisplay(props.type)}</td>
      <td><b>{props.question}</b></td>
      <td><pre>{props.answer}</pre></td>
      <td class="understand">
        <select data-id="32">
          <option value="0">understand?</option>
          <option value="1">confused</option>
          <option value="2">fair</option>
          <option value="3">excellent</option>
        </select>
      </td>
      <td>
        <span>••••</span><span>.........</span><br/>
        <span>==</span><span>---</span><br/>
        <span>####</span><span>+++</span></td>
    </tr>
  );
};

export default Objective;
