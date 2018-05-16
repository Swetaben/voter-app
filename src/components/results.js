import React, {Component} from 'react';

class Results extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  votesAngularInPercent() {
    if(this.store.getState().angular) {
      return (this.store.getState().angular / (this.store.getState().angular + this.store.getState().react + this.store.getState().vue) * 100);
    }else {
      return 0;
    }
  }

  votesReactInPercent() {
    if(this.store.getState().react) {
      return (this.store.getState().react / (this.store.getState().angular + this.store.getState().react + this.store.getState().vue) * 100);
    }else {
      return 0;
    }
  }

  votesVueInPercent() {
    if(this.store.getState().vue) {
      return (this.store.getState().vue / (this.store.getState().angular + this.store.getState().react + this.store.getState().vue) * 100);
    }else {
      return 0;
    }
  }

  render() {
    return (
      <div>
        <span className="label label-danger">Angular: {this.votesAngularInPercent().toFixed(2) + '%'} | {this.store.getState().angular}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-danger" style={{width:this.votesAngularInPercent().toFixed(2) + '%'}}></div>
        </div>
        <span className="label label-info">Angular: {this.votesReactInPercent().toFixed(2) + '%'} | {this.store.getState().react}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-info" style={{width:this.votesReactInPercent().toFixed(2) + '%'}}></div>
        </div>
        <span className="label label-success">Angular: {this.votesVueInPercent().toFixed(2) + '%'} | {this.store.getState().vue}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-success" style={{width:this.votesVueInPercent().toFixed(2) + '%'}}></div>
        </div>
      </div>
    );
  }
}


export default Results;
