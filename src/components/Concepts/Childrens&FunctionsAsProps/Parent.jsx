import { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const Parent = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <Card title="Card 1">
        <p>Card 1 information</p>
        <button>Add me</button>
      </Card>

      <Card title="Card 2">
        <p>Card 2 information</p>
        <button>Add me</button>
      </Card>

      <Button text="click me" handleClick={handleClick}>
        <h1>{count}</h1>
      </Button>
    </div>
  );
};

export default Parent;
