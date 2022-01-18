




//
//
//

const { useState } = require("react");


const feedbackForm = (props) => {

  // 
  const [error,setError] = useState('');

  setError('you must enter a valid email address format!!!!!!');

  return (
    <div>
      { error.length > 0 && <h3>ERROR!</h3> }
      <input />
      <button />
    </div>
  );

}
