const ParentComponent = () => {
  return (
    <div>
      <h1>the color is {/** ??? */} </h1>
      <ChildButtons />
    </div>
  );
};

const ChildButtons = () => {
  return (
    <div>
      <button>blue</button>
      <button>red</button>
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
  return (
    <div>
      <button onClick={() => props.setColor("BLUE")}>blue</button>
      <button onClick={() => props.setColor("RED")}>red</button>
    </div>
  );
};
