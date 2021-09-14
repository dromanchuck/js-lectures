import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
    };
  }

  onClickPlus = () => {
    this.setState({
      count: ++this.state.count,
    });
  };

  onClickMinus() {
    alert("-");
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          style={{
            fontSize: 100,
          }}
          onClick={this.onClickMinus}
        >
          -
        </button>
        <p
          style={{
            fontSize: 100,
          }}
        >
          {this.state.count}
        </p>
        <button
          style={{
            fontSize: 100,
          }}
          onClick={this.onClickPlus}
        >
          +
        </button>
      </div>
    );
  }
}
