import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  const root = document.querySelector('#main');
  ReactDOM.render(<Root />, root);
});
