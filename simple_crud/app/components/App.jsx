import React, {Component} from 'react';

export default class App extends Component {
  // TODO: authentication
  // componentWillMount() {
  //   this.props.loadUserFromToken();
  // }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}