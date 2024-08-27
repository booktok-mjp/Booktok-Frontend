const AppHeader = ({ text, size }) => {
  return (
    <div className="source-sans-3-bold" style={{ fontSize: size }}>
      {text}
    </div>
  );
};

export default AppHeader;
