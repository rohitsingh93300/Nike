import React, { useState } from "react";
import Logo from "../assets/logo2.png";
// import { MdMenu } from "react-icons/md";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import ResponsiveMenu from "./ResponsiveMenu";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Mens",
    link: "/mens",
  },
  {
    id: 3,
    title: "Womens",
    link: "/womens",
  },
  {
    id: 4,
    title: "Kids",
    link: "/kids",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
}
  return (
    <div className=" text-white py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* logo section */}
        <div>
          <img src={Logo} alt="" className="max-w-[100px] invert" />
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
                  <Link
                    to={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {item.title}
                  </Link>
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
              <Link to="/cart"><button className="text-xl ps-14">
                <ShoppingCart />
              </button></Link>
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

       <Link to="/cart"><ShoppingCart/></Link>
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

export default Navbar;
