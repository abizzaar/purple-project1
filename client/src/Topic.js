import React, { Component } from 'react';


class Topic extends Component {
  constructor(props) {
    super(props);
    this.topic = props.topic;
    this.viewpoints = props.viewpoints;
    console.log(props.viewpoints);
  }

  render() {
    let vps = [];
    for (let i = 0; i < this.viewpoints.length; i++) {
      vps.push(<div>{this.viewpoints[i]}</div>)
    };
    return (
      <div>
        <h1>{this.topic}</h1>
        {vps}
      </div>
    );
  }
}

export default Topic;