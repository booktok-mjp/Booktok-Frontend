import { useUser } from '../context/UserContext';

const HomeView = () => {
  const { setUser } = useUser();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomeView;
