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
      vps.push(<div key={i}>{this.viewpoints[i]}</div>)
    };
    return (
      <div className="topicBox">
        <h1>{this.topic}</h1>
        {vps}
      </div>
    );
  }
}

export default Topic;