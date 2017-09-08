import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.handle = setInterval(() => {
      this.setState( {date: new Date() } );
    }, 1000);
  }

  render () {
    return (
      <h1>The time is {this.state.date.toTimeString()}</h1>
    );
  }

  componentDidMount () {
    this.tick();
  }

  componentWillUnmount () {
    clearInterval(this.handle);
    this.handle = 0;
  }

}




export default Clock;
