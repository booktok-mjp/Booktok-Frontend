import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(
    getDeviceType(window.innerWidth)
  );

  function getDeviceType(width) {
    if (width < 768) {
      return 'mobile';
    } else if (width >= 768 && width <= 1081) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
