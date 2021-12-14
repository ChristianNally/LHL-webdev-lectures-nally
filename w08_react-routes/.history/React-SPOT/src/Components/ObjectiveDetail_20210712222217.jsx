const ObjectiveDetail = (props) => {
  // console.log("Objective function executed. props=" + JSON.stringify(props));

  return (
    <>
      <p>{props.id}</p>
      <p>{props.day_id}</p>
      <p>{props.type}</p>
      <p>{props.question}</p>
      <p>{props.answer}</p>
      </>
  );
};

export default ObjectiveDetail;
