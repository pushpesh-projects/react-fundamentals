const DecrementButton = ({ onDecrement }) => {
  return (
    <div>
      <button onClick={onDecrement}>Decrement Count</button>
    </div>
  );
};

export default DecrementButton;
