const CounterContainer = ({ children }) => {
  return (
    <div
      style={{
        width: "40%",
        border: "2px solid blue",
        marginTop: "50px",
        marginInline: "auto",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

export default CounterContainer;
