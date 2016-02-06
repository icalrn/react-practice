var React = require('react');
var ReactDOM = require('react-dom');
/*
  StorePicker
  Will let us conjure <StorePicker/>
*/
var StorePicker = React.createClass({

  render : function() {
    return (
      <p>hello!</p>
    )
  }

});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));