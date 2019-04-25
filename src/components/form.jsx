import React, { Component } from "react";
import AutoComplete from "./autocomplete";

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      comm: "",
      data: [
        { name: "Abu", age: 20, gender: "male" },
        { name: "Kal", age: 21, gender: "male" },
        { name: "Mark", age: 25, gender: "female" },
        { name: "Dark", age: 30, gender: "female" }
      ],
      gender: true
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.name, this.state.age);
    const data = [...this.state.data];
    const gender = this.state.gender === true ? "male" : "female";
    data.push({ name: this.state.name, age: 2019 - this.state.age, gender });
    this.setState({ data });
  };

  handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleToggle = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      gender: !this.state.gender
    });
  };

  handleDelete = person => {
    const data = this.state.data.filter(d => d.name !== person.name);
    this.setState({ data });
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-4">Age Calculator</h1>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <label>YOB</label>
                <input
                  type="number"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Enter YOB"
                  required
                />
              </div>
              <div className="form-group">
                <label>Comments</label>
                <textarea
                  className="form-control"
                  name="comm"
                  value={this.state.comm}
                  onChange={this.handleInputChange}
                  rows="3"
                />
              </div>
              <AutoComplete />
              Gender : {this.state.gender == true ? "Male " : "Female "}
              <label className="switch m-2">
                <input type="checkbox" onChange={this.handleToggle} />
                <span className="slider round" />
              </label>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col">
            {this.state.data.length == 0 ? (
              <p>Records Not Found</p>
            ) : (
              <p>{this.state.data.length} Records Found</p>
            )}
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((d, index) => (
                  <tr key={index}>
                    <td>{d.name}</td>
                    <td>{d.age}</td>
                    <td>{d.gender}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(d)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AgeCalculator;
