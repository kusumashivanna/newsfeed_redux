import React, { Component } from "react";
import NewsConatiner from "./container/NewContainer";
import UserConatiner from "./container/UserContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NewsConatiner />
        <UserConatiner/>
      </div>
    );
  }
}
