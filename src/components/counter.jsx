import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  render() {
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => onDecrement(counter)}
          disabled={counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
