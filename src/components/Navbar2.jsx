import React, { useContext, useState } from "react";
import Logo from "../assets/logo2.png";
// import { MdMenu } from "react-icons/md";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavbarMenu } from "./Navbar";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { ShopContext } from "../Context/ShopContext";


const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const { getTotalCartItems } = useContext(ShopContext)
  return (
    <div className=" text-black bg-gray-100 py-2 z-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* logo section */}
        <div>
          <img src={Logo} alt="" className="max-w-[100px] " />
        </div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <a
                    href={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {item.title}
                  </a>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <Link to="/cart"><div className="  relative">
                <ShoppingCart /><div className='bg-[#138695]  w-5 absolute -top-3 -right-2 flex items-center justify-center rounded-full text-white'>{getTotalCartItems()}</div>
              </div></Link>
            </UpdateFollower>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <button className="text-xl ps-8">
                <FaRegUser />
              </button>
            </UpdateFollower>
          </ul>
        </div>
        <div className="flex gap-8 md:hidden z-50">

        <Link to='/cart'><div className='relative w-10 z-50'>
                        <ShoppingCart /><div className='bg-[#138695] z-40 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white'>{getTotalCartItems()}</div>
                    </div>
                    </Link>
          {/* Mobile Hamburger icon */}
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className='cursor-pointer transition-all md:hidden z-50'
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className='cursor-pointer transition-all md:hidden z-50'
              size={30}
            />
          )}
        </div>
      </motion.div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar2;
