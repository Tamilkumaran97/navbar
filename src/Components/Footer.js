import React, { useState } from "react";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Footer = () => {
  const [open, setOpen] = useState(null);
  const showHosting = () => {
    setOpen(!open);
  };
  const [press, setPress] = useState(null);
  const showTool = () => {
    setPress(!press);
  };
  const [why, setWhy] = useState(null);
  const showSupport = () => {
    setWhy(!why);
  };
  const [about, setAbout] = useState(null);
  const showAbout = () => {
    setAbout(!about);
  };
  return (
    <div className="w-[100%]">
      {/**footer 1 */}
      <div className="px-2 sm:px-4 md:px-12 lg:px-16 py-6">
        <div className="lg:flex hidden justify-between ">
          <div>
            <h1 className="text-xl py-2 uppercase">Web Hosting</h1>
            <div className="text-blue-500 text-[15px]">
              <div className="p-2">Shared hosting</div>
              <div className="p-2">WordPress Hosting</div>

              <div className="p-2">WordPress VPS</div>
              <div className="p-2">VPS Hosting</div>
              <div className="p-2">Cloud VPS</div>
              <div className="p-2">Dedicated Server Hosting</div>
              <div className="p-2">Bare Metal Servers</div>
              <div className="p-2">Enterprise Hosting Solutions</div>
              <div className="p-2">OpenMetal Cloud IaaS</div>
              <div className="p-2">Reseller Hosting</div>
              <div className="p-2">Minecraft Server Hosting</div>
              <div className="p-2">eCommerce Hosting</div>
            </div>
          </div>
          <div>
            <h1 className="text-xl py-2 uppercase">HOSTING TOOLS</h1>
            <div className="text-blue-500 text-[15px]">
              <div className="p-2">WordPress</div>
              <div className="p-2">WooCommerce Hosting</div>
              <div className="p-2">Drupal Hosting</div>
              <div className="p-2">Joomla Hosting</div>
              <div className="p-2">cPanel Hosting</div>
              <div className="p-2">PHP Hosting</div>
              <div className="p-2">Magento Hosting</div>
              <div className="p-2">PrestaShop Hosting</div>
              <div className="p-2">WebPro Dashboard</div>
              <div className="p-2">WordPress Website Builder</div>
              <div className="p-2">Domain Names</div>
            </div>
          </div>
          <div>
            <h1 className="text-xl py-2 uppercase">SUPPORT</h1>
            <div className="text-blue-500 text-[15px]">
              <div className="p-2">Live Chat</div>
              <div className="p-2">757.416.6575</div>
              <div className="p-2">Support Center</div>
              <div className="p-2">Community Support</div>
              <div className="p-2">WordPress Tutorials</div>
              <div className="p-2">Premier Support</div>
              <div className="p-2">Managed Hosting</div>
              <div className="p-2">Website Transfers</div>
            </div>
          </div>
          <div>
            <h1 className="text-xl py-2 uppercase">About US</h1>
            <div className="text-blue-500 text-[15px]">
              <div className="p-2">Contact Us</div>
              <div className="p-2">About Us</div>
              <div className="p-2">Blog</div>
              <div className="p-2">News</div>
              <div className="p-2">Careers</div>
              <div className="p-2">Affiliates</div>
              <div className="p-2">Sitemap</div>
              <div className="p-2">Refer a Friend</div>
              <div className="p-2">Student Web Hosting</div>
            </div>
          </div>
        </div>
        {/**small device */}
        <div className="lg:hidden block  ">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl py-2 uppercase">Web Hosting</h1>
              <div
                onClick={showHosting}
                className={`${open && "rotate-180 duration-500"}`}
              >
                <RiArrowDownSLine size={28} color="blue" />
              </div>
            </div>

            {open && (
              <div className="text-blue-500 text-[15px]">
                <div className="p-2">Shared hosting</div>
                <div className="p-2">WordPress Hosting</div>

                <div className="p-2">WordPress VPS</div>
                <div className="p-2">VPS Hosting</div>
                <div className="p-2">Cloud VPS</div>
                <div className="p-2">Dedicated Server Hosting</div>
                <div className="p-2">Bare Metal Servers</div>
                <div className="p-2">Enterprise Hosting Solutions</div>
                <div className="p-2">OpenMetal Cloud IaaS</div>
                <div className="p-2">Reseller Hosting</div>
                <div className="p-2">Minecraft Server Hosting</div>
                <div className="p-2">eCommerce Hosting</div>
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl py-2 uppercase">HOSTING TOOLS</h1>
              <div
                className={`${press && "rotate-180 duration-500"}`}
                onClick={showTool}
              >
                <RiArrowDownSLine size={28} color="blue" />
              </div>
            </div>

            {press && (
              <div className="text-blue-500 text-[15px]">
                <div className="p-2">WordPress</div>
                <div className="p-2">WooCommerce Hosting</div>
                <div className="p-2">Drupal Hosting</div>
                <div className="p-2">Joomla Hosting</div>
                <div className="p-2">cPanel Hosting</div>
                <div className="p-2">PHP Hosting</div>
                <div className="p-2">Magento Hosting</div>
                <div className="p-2">PrestaShop Hosting</div>
                <div className="p-2">WebPro Dashboard</div>
                <div className="p-2">WordPress Website Builder</div>
                <div className="p-2">Domain Names</div>
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl py-2 uppercase">SUPPORT</h1>
              <div
                onClick={showSupport}
                className={`${why && "rotate-180 duration-500"}`}
              >
                <RiArrowDownSLine size={28} color="blue" />
              </div>
            </div>

            {why && (
              <div className="text-blue-500 text-[15px]">
                <div className="p-2">Live Chat</div>
                <div className="p-2">757.416.6575</div>
                <div className="p-2">Support Center</div>
                <div className="p-2">Community Support</div>
                <div className="p-2">WordPress Tutorials</div>
                <div className="p-2">Premier Support</div>
                <div className="p-2">Managed Hosting</div>
                <div className="p-2">Website Transfers</div>
              </div>
            )}
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl py-2 uppercase">About US</h1>
              <div
                className={`${about && "rotate-180 duration-500"}`}
                onClick={showAbout}
              >
                <RiArrowDownSLine size={28} color="blue" />
              </div>
            </div>

            {about && (
              <div className="text-blue-500 text-[15px]">
                <div className="p-2">Contact Us</div>
                <div className="p-2">About Us</div>
                <div className="p-2">Blog</div>
                <div className="p-2">News</div>
                <div className="p-2">Careers</div>
                <div className="p-2">Affiliates</div>
                <div className="p-2">Sitemap</div>
                <div className="p-2">Refer a Friend</div>
                <div className="p-2">Student Web Hosting</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/**footer 2 */}
      <div className="lg:flex w-[100%] justify-between px-16 py-6">
        <div className="order-2 lg:order-1">
          <div className="text-xl text-center font-light">Family of brands</div>
          <div className="flex justify-center gap-4 py-4">
            <div>logo</div>
            <div>logo</div>
            <div>logo</div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className=" flex lg:justify-end justify-center text-xl font-light">
            Follow Us
          </div>
          <div className="flex justify-center gap-8 py-4">
            <BiLogoFacebook size={36} color="blue" />
            <BiLogoGithub size={36} color="blue" />
            <BiLogoLinkedin size={36} color="blue" />
            <BiLogoTwitter size={36} color="blue" />
            <BiLogoYoutube size={36} color="blue" />
          </div>
        </div>
      </div>
      {/**footer 3 */}
      <div className="bg-blue-700 p-4 xl:p-6 text-center w-[100%]">
        <div className="lg:flex justify-between  py-4 text-[15px] lg:text-[14px] xl:text-[15px]">
          <div className="text-white ">
            <div className="p-">
              555 S. Independence Blvd., Virginia Beach, VA 23452
            </div>
            <div className="">
              2020-2023 © InMotion Hosting, Inc., All Rights Reserved.
            </div>
          </div>
          <div className="text-white ">
            <div className="flex flex-wrap lg:justify-end justify-center lg:p-1  text-center text-[15px] lg:text-[14px] xl:text-[15px] ">
              <div className="border-r px-2 ">
                {" "}
                <a href="/" className="border-b  cursor-pointer ">
                  Terms of Service
                </a>{" "}
              </div>
              <div className="border-r px-2 ">
                <a href="/" className="border-b cursor-pointer ">
                  Privacy Policy
                </a>
              </div>
              <div className="border-r px-2 ">
                <a href="/" className="border-b cursor-pointer ">
                  DPA
                </a>
              </div>
              <div className="border-r px-2 ">
                <a href="/" className="border-b cursor-pointer ">
                  Accessibility Statement
                </a>
              </div>
              <div className=" px-2 ">
                <a href="/" className="border-b cursor-pointer ">
                  Legal Inquiries
                </a>
              </div>
            </div>
            <div className="flex flex-wrap lg:justify-end justify-center p-1 text-[15px] lg:text-[14px] xl:text-[15px]">
              <div className="border-r px-2">
                <a href="/" className="border-b cursor-pointer ">
                  Do Not Sell My Personal information
                </a>
              </div>
              <div className=" px-2">
                <a href="/" className="border-b cursor-pointer ">
                  {" "}
                  Limit Use of My Sensitive Personal Information
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white text-center py-2 lg:py-4 text-[15px] lg:text-[14px] xl:text-[15px]">
          <h1>
            By using this website or chat features, you signify that you agree
            to be bound by these{" "}
            <a href="/" className="border-b cursor-pointer">
              Universal Terms of Service
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
