import { Component, useState } from "react";

export const ListItem1 = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const onClickCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <li>
      <input type="checkbox" checked={checked} onChange={onClickCheckbox} />
      {children}
    </li>
  );
};

export class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  onClickCheckbox = () => {
    const { checked } = this.state;
    this.setState({ ...this.state, checked: !checked });
  };

  render() {
    const { children } = this.props;
    const { checked } = this.state;

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
