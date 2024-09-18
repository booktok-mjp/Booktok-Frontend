const CustomHeader = ({ text, fontSize, color }) => {
  return (
    <span className="source-sans-3-bold" style={{ fontSize, color }}>
      {text}
    </span>
  );
};

export default CustomHeader;
