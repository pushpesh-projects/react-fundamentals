import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Parent = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <ChildA title="title for A" name={name} setName={setName} />
      <ChildB title="title for B" name={name} />
    </div>
  );
};

export default Parent;
