import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center hidden lg:block">
        

        <div className="flex space-x-20 ">
          <div className="flex items-start flex-col">
          
            <img
              src="/src/assets/CateringLogo2.png"
              alt="Logo"
              className="w-12 h-12 rounded-full bg-white mb-4"
            />
          
            <p className="text-sm w-[400px]">Chef Connect brings the finest chefs to your doorstep, turning every meal into a celebration of taste and innovation.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Solutions</h4>
            <ul className="text-sm ">
              <li className='py-1'>
                <a href="#">Marketing</a>
              </li>
              <li className='py-1'>
                <a href="#">Analytics</a>
              </li>
              <li className='py-1'>
                <a href="#">Commerce</a>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <ul className="text-sm ">
              <li className='py-1'>
                <a href="#">Help Center</a>
              </li>
              <li className='py-1'>
                <a href="#">Contact Us</a>
              </li>
              <li className='py-1'>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul className="text-sm ">
              <li className='py-1'>
                <a href="#">About</a>
              </li>
              <li className='py-1'>
                <a href="#">Chefs</a>
              </li>
              <li className='py-1'>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="text-sm ">
            <li className='py-1'>
                <a href="#">Claim</a>
              </li>
              <li className='py-1'>
                <a href="#">Privacy Policy</a>
              </li>
              <li className='py-1'>
                <a href="#">Terms of Service</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="max-w-[1100px] mx-auto border-t border-white lg:mt-4"></div>

      {/* Rights Reserved and Social Icons */}
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row justify-between items-center mt-4">
        <p className="text-sm lg:mr-6 mb-4 lg:mb-0 text-center lg:text-left">&copy; {new Date().getFullYear()} Chef Connect. All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-white">
            <FaFacebook size={24}/>
          </a>
          <a href="#" className="text-white">
            <FaTwitter size={24}/>
          </a>
          <a href="#" className="text-white">
            <FaInstagram size={24}/>
          </a>
          <a href="#" className="text-white">
            <FaYoutube size={24}/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
