function Title(props) {
  const { path, name } = props;

  return (
    <p>
      Edit <code>{path}</code> and save to reload. Hello, my name is {name}
    </p>
  );
}

function Subtitle() {
  return <p>Subtitle</p>;
}

export { Title, Subtitle };
