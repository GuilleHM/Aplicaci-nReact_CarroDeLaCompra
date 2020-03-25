import React, { Component } from "react";

// Stateless Functional Component Equivalents
//const NavBar = (props) => { return //return here same elements than in the class style Component but removing 'this'}
//or
//function NavBar(props) {return //idem}

class NavBar extends Component {
  render() {
    // Destructuring
    const { totalCounters } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {/* {this.props.totalCounters}  No cuando empleamos destructuring */}
            {totalCounters}
          </span>
        </a>
        <br />
      </nav>
    );
  }
}

export default NavBar;
