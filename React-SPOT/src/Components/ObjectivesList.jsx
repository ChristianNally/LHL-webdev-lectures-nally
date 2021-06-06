import Objective from "./Objective";

const ObjectivesList = (props) => {
//  console.log("ObjectivesList function executed. props=" + JSON.stringify(props));
  return (
    <table>
      <tbody>
        {
          props.objectives.map( (obj,index) => {
            return <Objective 
              key={obj.id} 
              obj={obj}
            />
          })
        }
      </tbody>
    </table>
  );
};

export default ObjectivesList;
