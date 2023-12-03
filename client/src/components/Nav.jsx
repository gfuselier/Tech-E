import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="flex justify-end space-x-4 p-4">
      <li className="nav-item">
        <Link
          to="/"
          className={`text-blue-500 hover:text-blue-700 ${currentPage === '/' ? 'font-bold' : ''}`}
        >Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/HomePage"
          className={`text-blue-500 hover:text-blue-700 ${currentPage === '/HomePage' ? 'font-bold' : ''}`}
        >
          
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Login"
          className={`text-blue-500 hover:text-blue-700 ${currentPage === '/Login' ? 'font-bold' : ''}`}
        >
            Login/Sign Up
          
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Checkout"
          className={`text-blue-500 hover:text-blue-700 ${currentPage === '/Checkout' ? 'font-bold' : ''}`}
        >
          Checkout
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;