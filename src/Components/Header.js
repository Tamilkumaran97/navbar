import React, { useState } from "react";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import cube from "../Assets/cube-svgrepo-com.svg";
import handshake from "../Assets/handshake-deal-svgrepo-com.svg";
import Hamburger from "hamburger-react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(null);
  const showHosting = () => {
    setOpen(!open);
  };
  const [press, setPress] = useState(null);
  const showPress = () => {
    setPress(!press);
  };
  const [why, setWhy] = useState(null);
  const showWhy = () => {
    setWhy(!why);
  };

  const [menu, setMenu] = useState(null);
  const showMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="relative w-[100%] ">
      {/**small screen menubar */}
      <AnimatePresence>
        {menu && (
          <div className="w-[100%] relative  ">
            <div className="absolute">
              <div className="fixed w-[100%] h-screen bg-black/20 "></div>{" "}
            </div>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3, delay: 0.3, stiffness: 200 }}
              exit={{ x: "-100%", transition: { duration: 0.3 } }}
              className="absolute z-20 w-72 bg-white border-l-2 border-red-500 "
            >
              <ul className="xl:flex  border-b-2 justify-center items-center text-lg font-light gap-12 ">
                <li className="p-6 border-b-2 flex justify-between">
                  {open && (
                    <div
                      onClick={showHosting}
                      className="flex items-center gap-2"
                    >
                      <BsArrowLeft /> <span>Mani Menu</span>
                    </div>
                  )}
                  {press && (
                    <div
                      onClick={showPress}
                      className="flex items-center gap-2"
                    >
                      <BsArrowLeft /> <span>Mani Menu</span>
                    </div>
                  )}
                  {why && (
                    <div onClick={showWhy} className="flex items-center gap-2">
                      <BsArrowLeft /> <span>Mani Menu</span>
                    </div>
                  )}
                  <div></div>
                  <GrClose onClick={showMenu} color="red" size={22} />
                </li>
                {/**hover semi box for webHosting */}
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.3, stiffness: 200 }}
                      exit={{ x: "-100%", transition: { duration: 0.3 } }}
                      className=" z-30 bg-white p-4 h-[90%] absolute w-72 font-normal  "
                    >
                      <div className="flex py-2 ">
                        <img className="w-10" src={cube} alt="" />
                        <div className="text-blue-500 px-6 ">
                          <h1 className="text-lg">Shared Hosting</h1>
                        </div>
                      </div>
                      <div className="flex py-2 ">
                        <img className="w-10" src={handshake} alt="" />
                        <div className="text-blue-500 px-6">
                          <h1 className="text-lg">Reseller Hosting</h1>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/**hover semi box for Wordpress*/}
                <AnimatePresence>
                  {press && (
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.3, stiffness: 200 }}
                      exit={{ x: "-100%", transition: { duration: 0.3 } }}
                      className="  z-30 bg-white p-2 h-[90%] absolute w-72 font-normal 
                "
                    >
                      <div className="flex gap-2 items-center">
                        <img className="w-10" src={handshake} alt="" />
                        <div className="text-blue-500 py-4">
                          <h1 className="text-base">WordPress On cPanel</h1>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img className="w-10" src={handshake} alt="" />
                        <div className="text-blue-500 py-4">
                          <h1 className="text-base">
                            WordPress on Platform i{" "}
                            <span className="text-red-500"> NEW</span>
                          </h1>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img className="w-10" src={handshake} alt="" />
                        <div className="text-blue-500 py-4">
                          <h1 className="text-base">WooCommerce Hosting</h1>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/**why us */}
                <AnimatePresence>
                  {why && (
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.3, stiffness: 200 }}
                      exit={{ x: "-100%", transition: { duration: 0.3 } }}
                      className=" z-30 bg-white p-2 h-[90%] absolute w-72 font-normal "
                    >
                      <ul className="text-blue-500">
                        <li className="p-1">About Us</li>
                        <li className="p-1">Premier Support</li>
                        <li className="p-1">Managed Hosting</li>
                        <li className="p-1">Contact us</li>
                        <li className="p-1">Sitemap</li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="relative">
                  <li
                    onClick={showHosting}
                    className="p-4 flex justify-between cursor-pointer items-center"
                  >
                    <h1>Web Hosting</h1>
                    <BsArrowRight size={18} color="red" />
                  </li>
                </div>
                <div className="relative">
                  <li
                    onClick={showPress}
                    className="p-4 flex justify-between items-center"
                  >
                    <div>WordPress</div>
                    <BsArrowRight size={18} color="red" />
                  </li>
                </div>

                <li className="p-4 flex justify-between items-center">
                  <div>VPS Hosting</div>
                  <BsArrowRight size={18} color="red" />
                </li>
                <li className="p-4 flex justify-between items-center">
                  <div>Dedicated Server</div>
                  <BsArrowRight size={18} color="red" />
                </li>
                <li className="p-4 flex justify-between items-center">
                  <div>Domains</div>
                  <BsArrowRight size={18} color="red" />
                </li>
                <div className="relative">
                  <li
                    onClick={showWhy}
                    className="p-4 flex cursor-pointer justify-between items-center"
                  >
                    <div>Why Us</div> <BsArrowRight size={18} color="red" />
                  </li>
                </div>
              </ul>
              <div className="xl:flex justify-center items-center gap-4">
                <div className="flex p-4 gap-1 items-center">
                  <HiOutlineChatBubbleLeftEllipsis size={28} color="red" />
                  <div className="text-lg  font-light">Start a live Chat</div>
                </div>
                <div className="flex p-4 gap-1 items-center">
                  <IoCallOutline size={25} color="red" />
                  <div className="text-lg font-light  ">7574166575</div>
                </div>
                <div className="flex p-4 items-center text-lg gap-1 font-light">
                  <MdOutlineSupportAgent size={32} color="red" />
                  <h1>visit our Support Center</h1>
                </div>
                <div className="flex p-4 items-center text-lg gap-1 font-light">
                  <h1>
                    <RiShoppingCartLine size={25} color="red" />
                  </h1>
                  <h1>Chart</h1>
                </div>
                <div className="p-4">
                  <div className="border-2  bg-blue-600 rounded-md py-2 px-4">
                    <h1 className="text-lg font-light text-center text-white ">
                      Login
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="relative px- lg:px-10 mx-auto">
        {/**header 1 */}

        <div className=" flex justify-between items-center border-b py-4 px-6">
          <div className="flex items-center">
            <div className="block  xl:hidden pr-4">
              <IoMenuOutline onClick={showMenu} color="red" size={33} />
            </div>
            <h1>Logo</h1>
          </div>
          <div className="flex gap-5">
            <div className="flex justify-center gap-1 items-center">
              <HiOutlineChatBubbleLeftEllipsis size={28} color="red" />
              <div className="text-lg xl:block hidden font-light">Chat Now</div>
            </div>
            <div className="flex justify-center gap-1 items-center">
              <IoCallOutline size={25} color="red" />
              <div className="text-lg font-light xl:block hidden ">
                {" "}
                7574166575
              </div>
            </div>
            <div className="xl:hidden block">
              <AiOutlineUser size={25} color="red" />
            </div>
            <h1>
              <RiShoppingCartLine size={25} color="red" />
            </h1>
          </div>
        </div>
        {/**header 2 */}
        <div className="hidden xl:flex justify-between p-4">
          <ul className="xl:flex  justify-center items-center text-lg font-light gap-12 ">
            <div className="relative group">
              <li
                onClick={showHosting}
                className="xl:flex justify-center cursor-pointer items-center"
              >
                <h1 className="">Web Hosting</h1>
                <RiArrowDownSLine size={32} color="red" />
              </li>
              {/**hover semi box for webHosting */}

              <motion.div className="border-t-2 group-hover:block hidden hover:block border-red-500 bg-white absolute font-normal p-4 w-[440px]">
                <div className="flex py-2 items-center ">
                  <img className="w-16" src={cube} alt="" />
                  <div className="text-blue-500 px-6 ">
                    <h1 className="text-xl">Shared Hosting</h1>
                    <p>Fast, Reliable & Secure</p>
                  </div>
                </div>
                <div className="flex py-2 items-center">
                  <img className="w-16" src={handshake} alt="" />
                  <div className="text-blue-500 px-6">
                    <h1 className="text-xl">Reseller Hosting</h1>
                    <p>White-label cPanel/WHM for Reseller</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="relative group">
              <li
                onClick={showPress}
                className="xl:flex justify-center items-center"
              >
                <div>WordPress</div>
                <RiArrowDownSLine size={32} color="red" />
              </li>
              {/**hover semi box for Wordpress*/}

              <div
                className="border-t-2 group-hover:block hidden hover:block border-red-500 bg-white absolute font-normal p-4 w-[470px]
                "
              >
                <div className="flex  items-center">
                  <img className="w-16" src={handshake} alt="" />
                  <div className="text-blue-500 px-6">
                    <h1>WordPress On cPanel</h1>
                    <p>Shared Hosting for WP, cPanel Included</p>
                  </div>
                </div>
                <div className="flex  items-center">
                  <img className="w-16" src={handshake} alt="" />
                  <div className="text-blue-500 px-6">
                    <h1>
                      WordPress on Platform i <span>NEW</span>
                    </h1>
                    <p>Next Generation Managed WP on VPS</p>
                  </div>
                </div>
                <div className="flex  items-center">
                  <img className="w-16" src={handshake} alt="" />
                  <div className="text-blue-500 px-6">
                    <h1>WooCommerce Hosting</h1>
                    <p>Easily Set up Your online Store</p>
                  </div>
                </div>
              </div>
            </div>

            <li>VPS Hosting</li>
            <li>Dedicated Servers</li>
            <li>Domains</li>
            <div className="relative group">
              <li
                onClick={showWhy}
                className="xl:flex cursor-pointer justify-center items-center"
              >
                <div>Why Us</div> <RiArrowDownSLine size={32} color="red" />
              </li>

              <div className="border-t-2 group-hover:block hidden hover:block border-red-500 bg-white absolute font-normal p-4 w-[200px]">
                <ul className="text-blue-500">
                  <li className="p-1">About Us</li>
                  <li className="p-1">Premier Support</li>
                  <li className="p-1">Managed Hosting</li>
                  <li className="p-1">Contact us</li>
                  <li className="p-1">Sitemap</li>
                </ul>
              </div>
            </div>
          </ul>
          <div className="xl:flex justify-center items-center gap-4">
            <div className="xl:flex justify-center items-center text-lg gap-1 font-light">
              <MdOutlineSupportAgent size={32} color="red" />
              <h1>Support Center</h1>
            </div>
            <div className="border-2 border-blue-600 rounded-md py-2 px-4">
              <h1 className="text-lg font-light text-blue-600 ">Login</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
