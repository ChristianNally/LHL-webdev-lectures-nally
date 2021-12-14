import { useParams } from 'react-router-dom';

const ObjectiveDetail = ({objectives}) => {
  // console.log("Objective function executed. props=" + JSON.stringify(props));

  const {id} = useParams();
  console.log('id:',id);
  console.log('objectives:', objectives);
  const objective = objectives.find(obj => {
    if (obj.id == id) {
      console.log('find obj:',obj," id:",id);
      return true;
    } else {
      return false;
    }
  });
  console.log('objective:', objective);


  return (
    <>
      <p>{objective.day_id}</p>
      <p>{objective.type}</p>
      <p>{objective.question}</p>
      <p>{objective.answer}</p>
    </>
  );
};

export default ObjectiveDetail;
