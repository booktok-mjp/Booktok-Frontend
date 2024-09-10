import './CustomGrid.css';

const CustomGrid = ({ items, gap }) => {
  return (
    <div className="custom-stack">
      {items && items.map((item) => <div>{item}</div>)}
    </div>
  );
};

export default CustomGrid;
