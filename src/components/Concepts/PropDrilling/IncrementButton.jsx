const IncrementButton = ({ onIncrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
};

export default IncrementButton;
