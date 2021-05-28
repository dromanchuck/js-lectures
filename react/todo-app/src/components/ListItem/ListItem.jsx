import { Component, useState, useEffect, PureComponent } from "react";

export const ListItem = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const onClickCheckbox = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  return (
    <li>
      <input type="checkbox" checked={checked} onChange={onClickCheckbox} />
      {children}
    </li>
  );
};

export class ListItem1 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };

    console.log("constructor");
  }

  onClickCheckbox = () => {
    const { checked } = this.state;
    this.setState({ ...this.state, checked: !checked });
  };

  async componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const { children } = this.props;
    const { checked } = this.state;
    console.log("render");

    return (
      <li>
        <input
          type="checkbox"
          checked={checked}
          onChange={this.onClickCheckbox}
        />
        {children}
      </li>
    );
  }
}
