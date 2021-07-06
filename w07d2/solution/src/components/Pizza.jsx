import {useState} from 'react';

const Pizza = () => {
  // const [toppings, setToppings] = useState([]);
  // const [crust, setCrust] = useState('deep dish');
  const [newTopping, setNewTopping] = useState('');

  const [pizza, setPizza] = useState({
    toppings: [],
    crust: 'kale'
  });

  const addTopping = () => {
    // toppings.push(newTopping);
    // setToppings([...toppings, newTopping]);

    // setToppings(prevToppings => {
    //   return [
      //   ...prevToppings, 
      //   newTopping
      // ];
    // });

    // setPizza({
    //   ...pizza, 
    //   toppings: [
    //     ...pizza.toppings, 
    //     newTopping
    //   ]
    // });

    setPizza(prevPizza => {
      return {
        ...prevPizza,
        toppings: [
          ...prevPizza.toppings,
          newTopping
        ]
      }
    });

    setNewTopping('');
  };

  const setCrust = (event) => {
    setPizza(prevPizza => {
      return {
        ...prevPizza,
        crust: event.target.value
      };
    });
  };

  return (
    <div>
      <h2>Create your own Pizza!!</h2>

      <div>
        <h2>Crust: {pizza.crust}</h2>
        <input 
          value={pizza.crust}
          onChange={setCrust}
        />
      </div>

      <div>
        <input 
          value={newTopping}
          onChange={(event) => { setNewTopping(event.target.value) }}
        />
        <button onClick={addTopping}>Add topping</button>
      </div>

      <div>
        <h2>Toppings!</h2>
        { pizza.toppings.map((topping, index) => {
          return <p key={index}>{topping}</p>
        }) }
      </div>
    </div>
  );
};

export default Pizza;
