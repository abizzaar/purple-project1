import React, { Component } from 'react';
import CommentBox from './CommentBox';
import Topic from './Topic';
import { renderers } from '../node_modules/react-markdown';
import './CommentBox.css';

class App extends Component {
  constructor() {
    super();
    this.data = {
      "topic": "Should Brett Kavanaugh withdraw his nomination?",
      "viewpoints":
        [
          "There’s not enough evidence on the side of the victims to not confirm Kavanaugh.",
        "Kavanaugh should not be confirmed because he is a sexual offender and lied under oath."
        ]
    }
  }

  render() {
  return (
      <div className="app">
        <Topic topic={this.data.topic} viewpoints={this.data.viewpoints}/> 
        <CommentBox />
      </div>);
  }
}

export default App;