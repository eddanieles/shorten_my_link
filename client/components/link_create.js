import React, {Component} from 'react';

class LinkCreate extends Component {
  handleSubmit(event) {
    event.preventDefault();

    Meteor.call('links.insert', this.refs.input.value)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to shorten</label>
          <input className="form-control" ref="input"/>
        </div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    )
  }
}

export default LinkCreate;
