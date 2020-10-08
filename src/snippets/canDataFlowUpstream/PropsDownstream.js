const ParentComponent = () => {
  const [color, setColor] = useState("BLUE");

  return (
    <div>
      <button onClick={() => setColor("BLUE")}>blue</button>
      <button onClick={() => setColor("RED")}>red</button>

      <ChildComponent color={color} />
    </div>
  );
};

const ChildComponent = (props) => {
  return <h1>the color is {props.color}!</h1>;
};
