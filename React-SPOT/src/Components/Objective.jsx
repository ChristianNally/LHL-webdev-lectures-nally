const Objective = (props) => {
  // console.log("Objective function executed. props=" + JSON.stringify(props));

  return (
    <tr className="Objective">
      <td>{props.obj.type}</td>
      <td>{props.obj.question}</td>
      <td>{props.obj.answer}</td>
    </tr>
  );
  };

export default Objective;
