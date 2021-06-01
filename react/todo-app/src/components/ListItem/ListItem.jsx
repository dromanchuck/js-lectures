import { PureComponent } from 'react';

export const ListItem = ({
  children,
  checked,
  setChecked,
  idishnik,
}) => {
  const onClickCheckbox = () => {
    console.log('onClickCheckbox ListItem', {
      idishnik,
    });
    setChecked({ checked: !checked, idishnik });
  };

  return (
    <li
      style={{
        textDecoration: checked
          ? 'line-through'
          : 'none',
      }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onClickCheckbox}
      />
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

    console.log('constructor');
  }

  onClickCheckbox = () => {
    const { checked } = this.state;
    this.setState({
      ...this.state,
      checked: !checked,
    });
  };

  async componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { children } = this.props;
    const { checked } = this.state;
    console.log('render');

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
