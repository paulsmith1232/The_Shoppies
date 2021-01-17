import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login</a></li>;        
      default:
        return <li><a href="/api/logout">Logout</a></li>;        
    }
  }

  render() {
    return (
      <header>
        <nav className="header-wrapper row">
          <p 
            to={'/'} 
            className="logo"
          >
            The Shoppies
          </p>
          <p className="main-nav">
            Pick your favourite movies to add to your list            
          </p>
        </nav>
      </header>     
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);


// Links for Submissions and Google Auth Login
// <ul className="main-nav">
// <li><a href="#">Submissions</a></li>
// {this.renderContent()}
// </ul>