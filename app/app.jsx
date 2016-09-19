var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'takatsugu',
  location: 'Ichikawa'
};

var objTwo = {
  age: 39,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);

