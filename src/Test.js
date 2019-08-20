import React, { Component } from "react";

export default class Test extends Component {
  componentDidMount = () => {
    this.props.GetUsers();
  };
  render() {
    return (
      <div>
        <div>Redux training</div>
        <hr/>
        {this.props.UserData &&
          this.props.UserData.userData &&
          this.props.UserData.userData.map(user => {
            return (
              <div>
                <div>{user.login}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
