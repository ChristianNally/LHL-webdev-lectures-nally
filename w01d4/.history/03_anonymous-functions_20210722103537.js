const runDatabaseQuery = function(action) {
  // console.log(action.toString());
  // i am running
  // complex logic
  // that has only to do with
  // running a databasequery
  action('Elise');
};

//
// lots of other code in here
//

// i need an action to feed into runDatabaseQuery
const sayHello = function(name){
  console.log('Hello, ',name);
};

// runDatabaseQuery(sayHello);

runDatabaseQuery(function(name){
  console.log('Hola Amiga! ',name);
});
