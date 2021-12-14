const ObjectiveRow = (props) => {
  // console.log("Objective function executed. props=" + JSON.stringify(props));

  return (
    <tr className="Objective">
      <td><Link to="">{props.id}</Link></td>
      <td>{props.day_id}</td>
      <td>{props.type}</td>
      <td>{props.question}</td>
      <td>{props.answer}</td>
    </tr>
  );
};

export default ObjectiveRow;
