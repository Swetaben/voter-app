import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {voteAngular, voteReact, voteVue} from "./actions";

class App extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  };

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  };

  handleVoteVue = () => {
    this.store.dispatch(voteVue());
  };

  render() {
    return (
      <div>
        <div className="container" style={{textAlign: 'center'}}>
          <img src="https://espial-ksiu6qbsd.netdna-ssl.com/wp-content/uploads/2016/10/Apple-Logo-black.png" style={{objectFit: "cover", height:'200px'}}/>
          <h2>What is your favourite FrontEnd Framework?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br/>
          <div className="row">
            <div className="col-xs-offset-1 col-xs-2">
              <img className="logo-img" src="https://angular.io/assets/images/logos/angular/angular.png" alt="Angular" onClick={this.handleVoteAngular}/>
            </div>
            <div className="col-xs-offset-1 col-xs-2">
              <img className="logo-img" src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="React" onClick={this.handleVoteReact}/>
            </div>
            <div className="col-xs-offset-1 col-xs-2">
              <img className="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Vue.svg/2000px-Vue.svg.png" alt="VueJS" onClick={this.handleVoteVue}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
