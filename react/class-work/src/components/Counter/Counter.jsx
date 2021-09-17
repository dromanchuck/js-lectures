import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor ", props.background);
    this.state = {
      count: props.initialCount || 0,
    };

    this.onClickMinus = this.onClickMinus.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount ", this.props.background);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate ", this.props.background);
  }

  onClickPlus = () => {
    this.setState({
      count: ++this.state.count,
    });
  };

  onClickMinus() {
    this.setState({
      count: --this.state.count,
    });
  }

  render() {
    const { count } = this.state;
    const background = this.props.background;
    console.log("render ", this.props.background);
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background,
        }}
      >
        {count !== 0 && (
          <button
            style={{
              fontSize: 100,
            }}
            onClick={this.onClickMinus}
          >
            -
          </button>
        )}

        <p
          style={{
            fontSize: 100,
          }}
        >
          {count}
        </p>
        {count === 10 ? null : (
          <button
            style={{
              fontSize: 100,
            }}
            onClick={this.onClickPlus}
          >
            +
          </button>
        )}
        {count === 10 ? <p>Убери свои грязные руки!</p> : null}
      </div>
    );
  }
}
