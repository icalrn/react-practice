var React = require('react');
var ReactDOM = require('react-dom');
/*
  StorePicker
  Will let us conjure <StorePicker/>
*/
var StorePicker = React.createClass({

  render : function() {
    return (
      <form className="store-selector">
        {/* This is a comment. Yes it's a little pain in the arse*/}
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" required/>
        <input type="Submit"/>
      </form>
    )
  }

});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));