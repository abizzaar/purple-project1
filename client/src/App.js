import React, { Component } from 'react';
import CommentBox from './CommentBox';
import { renderers } from '../node_modules/react-markdown';

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
  return (<CommentBox />);
  }
}

export default App;