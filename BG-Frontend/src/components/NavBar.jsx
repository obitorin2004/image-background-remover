import logo from '../assets/SK_logo.jpeg';
import { useNavigate } from 'react-router-dom';

 const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4 text-white "> 
      <img 
        onClick={() => navigate('/')}
        src={logo} alt='logo' className=' w-16 h-16 cursor-pointer rounded-full' />
        <div className='flex items-center'>
          <button className='border-white px-3 py-1 text-x1 rounded-mg bg-gray-900 font-semibold hover:bg-gray-700'>Login</button>
        </div>
    </div>
  );
}
export default NavBar;

