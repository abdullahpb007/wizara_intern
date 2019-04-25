import React, { Component } from "react";

class FormComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              name="fullName"
              onChange={this.handleNameChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleAgeChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default FormComponent;
