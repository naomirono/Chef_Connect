import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../../features/slices/usersApiSlice";
import { clearCredentials } from "../../../features/slices/authSlice";
import './navbar.css';

const Navbar = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const [logout] = useLogoutMutation();
  
    const handleLogin = () => {
      navigate("/login"); // Navigate to '/login'
    };
  
    const logoutHandler = async () => {
      try {
        await logout().unwrap();
        dispatch(clearCredentials());
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    };
  
    const handleSignUp = () => {
      navigate("/register");
    };

    const getProfileInitials = (name) => {
        if (!name) return "";
        const initials = name.split(" ").map((word) => word[0]).join("").toUpperCase();
        return initials;
      };

      const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <>
            <nav className="navbar z-20">
                <div className="navbar_logo">
                <img
                  src='https://chefconnectapp.s3.ap-south-1.amazonaws.com/CateringLogo2.png'
                  alt="Chef Connect Logo"
                  className="h-12 w-auto"
                />
                </div>

                <ul className="navbar_menu">
                    <li className="nav_link">
                        <a  onClick={() => handleScrollTo('hero')} className='hover:text-orange-500'>
                            <i className="fa-solid fa-house-chimney icon"></i>
                            <span>Home</span>
                        </a>
                    </li>

                    <li className="nav_link hidden lg:block">
                        <a  onClick={() => handleScrollTo('howItWorks')} className='hover:text-orange-500'>
                            <i className="fa-solid fa-list icon"></i>
                            <span>How It Works</span>
                        </a>
                    </li>

                    <li className="nav_link">
                        <a  onClick={() => handleScrollTo('chef')} className='hover:text-orange-500'>
                            <i className="fa-solid fa-user icon"></i>
                            <span>Chef</span>
                        </a>
                    </li>



                    <li className="nav_link">
                        <a  onClick={() => handleScrollTo('menu')} className='hover:text-orange-500'>
                        <i className="fa-solid fa-utensils icon"></i>
                            <span>Menu</span>
                        </a>
                    </li>

                
                </ul>

                <label htmlFor="toggle" className="hamburger hover:text-orange-500">
                    <i className="fa-solid fa-bars"></i>
                    <span className="toggle-text">
                        More
                    </span>
                </label>

                <input type="checkbox" name="toggle" id="toggle" />

                <ul className="navbar_sub-menu">

                    <li className="nav-link mt-4">
                    {userInfo ? (
                            <button
                                onClick={logoutHandler}
                                className="text-white hover:text-orange-500 sub-menu"
                            >
                                <i className="fa-solid fa-sign-out-alt"></i> Sign Out
                            </button>
                        ) : (
                            <a href="#" onClick={handleSignUp} className="bg-orange-500 text-white border-orange-600 px-4 py-2 mt-1.5 rounded-full focus:outline-none">
                            <i className="fa-solid fa-user-plus"></i>
                                <span>Join Us</span>
                            </a>
                        )}
                    </li>

                    <li className="nav-link">
                        {userInfo ? (
                            <>
                             <div
                               className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer sub-menu"
                             >
                               <span className="text-lg font-semibold text-white">
                                 {getProfileInitials(userInfo.name)}
                               </span>
                             </div>
                        
                           </>
                        ) : (
                            
                            <button 
                            onClick={handleLogin} 
                            className="bg-orange-500 text-white border-range-600 px-4 py-1.5 mt-2 rounded-full focus:outline-none">
                            <i className="fa-solid fa-right-from-bracket"></i>
                                Login
                            </button>
                        )}
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
