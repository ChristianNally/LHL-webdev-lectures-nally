import {useState} from 'react';

const Pizza = (props) => {

  const [newTopping,setNewTopping] = useState('');
  const [pizza,setPizza] = useState({
    toppings: [],
  });


  const addTopping = () => {

    // const newPizza = {
    //   ...pizza,
    //   toppings: [
    //     ...pizza.toppings,
    //     newTopping
    //   ]
    // };

    // setPizza(newPizza); // pass in the new value

    setPizza( prevPizza => {
      return {
        ...prevPizza,
        toppings: [
          ...prevPizza.toppings,
          newTopping
        ]
      }
    } ); // pass in the new value

  };

  return (
  <div>
    <div>
      <h2>This is the Pizza</h2>
      <input
        value={newTopping}
        onChange={ (event)=>{ setNewTopping(event.target.value) } }
      />
      <button onClick={addTopping}>Add Topping</button>
    </div>

    <div>
      <h2>Toppings!</h2>
      { pizza.toppings.map( (topping, index) => {
        return <p key={index}>{topping}</p>
      } ) }
    </div>
  </div>
  );

};

export default Pizza;