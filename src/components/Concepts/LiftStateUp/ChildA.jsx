const ChildA = ({ title, name, setName }) => {
  return (
    <div>
      <label htmlFor="childa">Child A:</label>
      <input
        id="childa"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        {title} - {name}
      </p>
    </div>
  );
};

export default ChildA;
