import React, { Component } from 'react';
import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children} {/* This is part of react-router.
                                  If our App component (in index.js) has any children and
                                  a user ever visits a route that matches
                                  up to any of the children, App must
                                  be responsible for showing those children. */}
      </div>
    );
  }
}
