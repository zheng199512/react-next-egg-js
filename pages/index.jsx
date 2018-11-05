import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

class App extends Component {
  getName = (e) => {
    e.preventDefault(); 
    alert("nihao");
  };
  render() {
    return (
      <Link href="/about">
        <a onClick={this.getName}>hello time,zheng</a>
      </Link>
    );
  }
}
export default App;
