




//
//
//

const { useState } = require("react");


const feedbackForm = (props) => {

  // 
  const [error,setError] = useState('');

  console.log('error:',error);

  setError('you must enter a valid email address format!!!!!!');

  setError( () => { return 'you must enter a valid email address format!!!!!!';} );

  return (
    <div>
      { error.length > 0 && <h3>ERROR!</h3> }
      <input />
      <button />
    </div>
  );

}
