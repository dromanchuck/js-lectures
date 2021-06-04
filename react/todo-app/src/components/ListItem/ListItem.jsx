export const ListItem = ({
  children,
  checked,
  setChecked,
  idishnik,
  removeItem,
  selected,
  setSelected,
}) => {
  const onClickCheckbox = () => {
    setChecked({ checked: !checked, idishnik });
  };

  const remove = (event) => {
    event.stopPropagation();
    console.log('ListItem remove');
    removeItem(idishnik);
  };

  const onSelect = () => {
    setSelected({
      selected: !selected,
      idishnik,
    });
  };

  return (
    <li
      onClick={onSelect}
      style={{
        textDecoration: checked
          ? 'line-through'
          : 'none',
        background: selected
          ? 'yellow'
          : 'transparent',
        cursor: 'pointer',
      }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onClickCheckbox}
      />
      {children}
      <button onClick={remove}>Удалить</button>
    </li>
  );
};
