import { useBlockCtx } from "./BlockCtx";
const CtxViewer = () => {
  const { highlight } = useBlockCtx();

  return (
    <div>
      <pre>{JSON.stringify(highlight, null, 2)}</pre>;
    </div>
  );
};

export default CtxViewer;
