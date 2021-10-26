import React, { Component } from 'react';


class Timeline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div id="chirp-card" className="row">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.chirp.username}</h5>
              <p>{this.props.chirp.message} </p>
           
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Timeline