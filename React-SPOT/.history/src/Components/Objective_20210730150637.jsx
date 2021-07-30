const Objective = (props) => {
  console.log("Objective function executed. props=" + JSON.stringify(props));

  return (
    <tr className="Objective">
      {/* <td>{props.id}</td> */}
      <td>{props.day_description}</td>
      <td>{props.type}</td>
      <td><b>{props.question}</b></td>
      <td>{props.answer}</td>
    </tr>
  );
};

export default Objective;
