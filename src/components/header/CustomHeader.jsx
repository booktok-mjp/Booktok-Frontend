const CustomHeader = ({ text, fontSize, color, pacifico = false }) => {
  return (
    <span
      className={pacifico ? 'pacifico-regular mx-3' : 'source-sans-3-bold mx-3'}
      style={{ fontSize, color }}
    >
      {text}
    </span>
  );
};

export default CustomHeader;
