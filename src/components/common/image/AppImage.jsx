import './AppImage.css';

const AppImage = ({ imgUrl, size }) => {
  return (
    <div className={`image-container ${size}`}>
      <img src={imgUrl} className="app-img" alt="image" />
    </div>
  );
};

export default AppImage;
