const ParentComponent = () => {
  return (
    <div>
      <h1>the color is {/** ??? */} </h1>
      <ChildButtons />
    </div>
  );
};

const ChildButtons = () => {
  const handleClick = (color) => {
    // somehow tell the parent about the color
  };
  return (
    <div>
      <button onClick={() => handleClick("BLUE")}>blue</button>
      <button onClick={() => handleClick("RED")}>red</button>
    </div>
  );
};

const ParentComponent = () => {
  const [color, setColor] = useState("BLUE");
  return (
    <div>
      <h1>the color is {color} </h1>
      <ChildButtons setColor={setColor} />
    </div>
  );
};

const ChildButtons = (props) => {
  const handleClick = (newColor) => {
    props.setColor(newColor);
  };

  return (
    <div>
      <button onClick={() => handleClick("BLUE")}>blue</button>
      <button onClick={() => handleClick("RED")}>red</button>
    </div>
  );
};
