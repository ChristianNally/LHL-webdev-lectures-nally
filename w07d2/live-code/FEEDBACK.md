When returning a multi-line value from a function, what do parentheses achieve for you?

When returning a multi-line value via a return statement, parentheses enable you to avoid 'automatic 
semicolon insertion'.

return ( // without this parenthesis, JS would insert a ;
<div>
  <h1>Text Goes Here</h1>
</div>
);

0::4::4

What are the two ways to set state on a React Component??

Let's say you have some state set up thusly:

const [numVisitors, setNumVisitors] = useState(0);

Setting state involves calling the state's associated setter function (setNumVisitors in this case).

That function can either take the new value for that state, like so:

setNumVisitors(5);

OR...

... it can take a callback as a parameter, like so:

setNumVisitors(currentValue => 5);

This second method is the preferred method for setting state.

Remember that all of the following are equivalent definitions of a function. The input parameter is ignored every time.

function (currentValue){
  return 5;
}

(currentValue) => { return 5; } 

currentValue => 5;

3::3::2


What is the difference between props and state?

Props are values that are handed down into a component, as attributes on the custom HTML tag associated with that component's being called.

State is controlled data that springs into existance when the useState function is called.

1::6::1


Why is it important to leave the original version of our state unchanged when we are updating state?

React compares the old and new values of state before deciding which DOM elements to update. A significant 
speed increase results from using React because it only chooses to update the DOM elements with changed 
states.

This means that when we are updating state, we need to create a new (deep) copy of the state (at least the 
parts that will change within a given event listener) and leave the original state data structure 
untouched.

Javascript's basic operations are often reference values. For example, the = operator will copy the 
reference to an object, rather than instantiating a new object.

For this reason, you will often need to use the spread operator (new in ES6) to make a copy of an object, 
like so:

const copy = {
  ...originalObject,
  keyWithAChangedValue: 'newValue'
};

2::3::2



When updating state on a component, what might cause an infinite loop?

If your component has an event handler that updates state (and certainly, there are many events that should 
update state), then if your onClick or onChange etc. directly calls your function that updates state, that 
by itself will trigger a rerendering of the component, which starts the process all over again.

To avoid that infinite loop, your event handler can be set to be a callback function. Then when the 
component rerenders, it will only establish that callback rather than invoking the state setter again. This 
breaks what would otherwise start an infinite loop of rendering/stateSetting/etc.

3::4::0
