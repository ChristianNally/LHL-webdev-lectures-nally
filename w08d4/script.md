# build up a Rectangle class
[ ] start blank and then add a constructor that takes length and width
[ ] instantiate an object from that class
[ ] add an area() member function

# creating a subclass
[ ] extend the Rectangle class
[ ] show how we can get a "must call super constructor in derived class before accessing 'this' ...
[ ] add another method to the subclass: volume() and recast by calling this.area()

# create a class-based component: ClassComponent.jsx
[ ] note: class-based and functional components can live side by side
[ ] transform the return () into the render method
[ ] include the new component into App.js

# pass props into the new component
[ ] attributes on the invocation of the component <ClassComponent someprop="somevalue" /> go into this.props
[ ] the reason that works without calling super() is because React adds this.props itself.

# show how state works
[ ] this.state is a special variable in React.Component objects. It's always an object.
[ ] add a counter that is rendered
[ ] ... and an increment handler. "Cannot read properties of undefined". ---> 3 ways to to fix this.
[ ] a) in the constructor ... this.clickHandler = this.handleClick.bind(this);
[ ] note: this.setState takes an object that will be MERGED with state, so primatives are fine.
[ ] note: state variables are shown differently for component-based vs. functional components. i.e. lifecycle

# BREAK

# Life Cycle methods
[ ] show the lifecycle infographic
[ ] make a new class-based component and add the three lifecycle methods to the component
[ ] add that component to App.js
[ ] componentDidMount (axios call, setInterval, etc.)
[ ] componentDidUpdate(prevProps, prevState) demo with a console.log, and if (prevState !== this.state. )
[ ] componentWillUnmount() : add conditional display for the new component to App.js
[ ] add a setInterval and keep a reference to it in state, so that it can be used in the cleanup.
