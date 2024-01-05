import { useNavigate } from "react-router-dom";
import LogoImage from "/src/assets/CateringLogo2.png";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../../features/slices/usersApiSlice";
import { clearCredentials } from "../../../features/slices/authSlice";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
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

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto custom-container flex items-center justify-between">
        <div>
          <img
            src={LogoImage}
            alt="Chef Connect Logo"
            className="h-12 w-auto"
          />
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-orange-500 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-orange-500 hover:underline"
              >
                Chef
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-orange-500 hover:underline"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-orange-500 hover:underline"
              >
                Pricing
              </a>
            </li>
          </ul>
        </nav>

        <div>
          {userInfo ? (
            <>
              <button
                onClick={logoutHandler}
                className="bg-orange-500 text-white border-range-600 px-4 py-2 rounded-full focus:outline-none"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="border text-white px-6 py-1.5 rounded-full focus:outline-none"
              >
                Log In
              </button>
              <button
                onClick={handleSignUp}
                className="bg-orange-500 text-white px-4 py-1.5 ml-6 rounded-full focus:outline-none"
              >
                Join Us
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
