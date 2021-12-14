import Objective from "./Objective";
import ObjectivesSearchForm from "./ObjectivesSearchForm";

const ObjectivesList = (props) => {
  console.log("ObjectivesList function executed. props.objectives.length=" + props.objectives.length);

  const hideAllAnswers = () => {
    document.querySelectorAll('td.answer');
    
  };

  return (
    <table>
      <colgroup>
      <col style={{width: 6 + '%'}}/>
      <col style={{width: 4 + '%'}}/>
      <col style={{width: 22 + '%'}}/>
      <col style={{width: 58 + '%'}}/>
      <col style={{width: 10 + '%'}}/>
      </colgroup>
      <tbody>
      <ObjectivesSearchForm
        searchDetails={props.searchDetails}
        newSearchDetails={props.newSearchDetails}
      />
        {
          props.objectives.map( (obj,index) => {
            return <Objective 
              key={obj.id} 
              {...obj}
            />
          })
        }
      </tbody>
    </table>
  );
};

export default ObjectivesList;