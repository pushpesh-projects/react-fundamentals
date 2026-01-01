import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

const CounterDisplay = ({ count, onIncrement, onDecrement, textColor }) => {
  return (
    <div>
      <h1>Counter App</h1>
      <p>This app increments the count when user clicks a button</p>
      <h1>Count: {count}</h1>
      <IncrementButton onIncrement={onIncrement} />
      <DecrementButton onDecrement={onDecrement} />
    </div>
  );
};

export default CounterDisplay;
