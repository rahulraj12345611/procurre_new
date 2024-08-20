import React, { useState, useEffect } from "react";
import { Navbar, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { AcmeLogo } from "./modules/Logo";
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

const HeaderDefault = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Add shadow if scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      isBordered
      className={`transition-shadow duration-300 ease-in-out ${isScrolled ? 'shadow-lg' : 'shadow-none'}`}
    >
      <div className="flex items-center justify-between w-full px-0 py-4">
        {/* Logo on the left */}
        <div className="flex-none mr-6">
          <AcmeLogo className="h-12 w-auto" /> {/* Adjust the logo size if needed */}
        </div>

        {/* Center content (Search input and Cart dropdown) */}
        <div className="flex items-center space-x-6 flex-grow max-w-4xl mx-auto">
          <div className="relative flex-grow">
            <Input
              classNames={{
                base: "w-full pr-12",  // Adjust width and padding-right for the search button
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Search Product, Category, Brand..."
              size="lg"
              type="search"
            />
            <Button
              auto
              flat
              className="absolute right-0 top-0 h-full px-4 rounded-l-none bg-red-500"
              css={{ borderLeft: 'none' }}
            >
              <FaSearch size={20} className="text-white" />
            </Button>
          </div>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <div className="flex items-center space-x-2 cursor-pointer">
                <FaShoppingCart size={25} />
                <span className="text-sm">Cart</span>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Cart Actions" variant="flat">
              <DropdownItem key="view_cart">View Cart</DropdownItem>
              <DropdownItem key="checkout">Checkout</DropdownItem>
              <DropdownItem key="empty_cart" color="danger">Empty Cart</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        {/* Right content (Login and Sign Up buttons) */}
        <div className="flex items-center space-x-6 ml-6">
          <Button auto flat color="danger" className="text-sm">Login</Button>
          <Button auto flat color="danger" className="text-sm">Sign Up</Button>
        </div>
      </div>
    </Navbar>
  );
}

export default HeaderDefault;
