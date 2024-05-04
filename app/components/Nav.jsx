"use client";

import React, { useState } from "react";

const Nav = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto md:flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <img src="hamburger.png" width={30} />
        </div>

        {/* правим първо за малки екрани,  после за средни и накрая за големи */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>

        {/* на малки е скрито, на големи вече е флекс и се вижда */}
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <img src="search.png" width={20} alt="search" />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search food"
        />
      </div>

      {/* CARD BUTTON */}
      <button className="text-white bg-black hidden md:flex items-center rounded-full">
        <img src="cart.png" alt="cart" width={20} className="mr-4 " />
        Cart
      </button>

      {/* MOBILE MENU */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[260px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[260px] h-screen bg-white z-10 duration-300"
        }
      >
        <img
          onClick={() => setNav(!nav)}
          src="cancel.png"
          width={20}
          className="absolute right-4 top-4 cursor-pointer"
          alt=""
        />
        <h2 className="text-2xl p-4 ">
          Best <span className="font-bold">Eats</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex ">
              <img src="td.png" alt="truck" className="mr-4 w-6" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <img src="star.png" alt="favorites" className="mr-4 w-6" />
              Favorites
            </li>
            <li className="text-xl py-4 flex">
              <img src="wallet.png" alt="wallet" className="mr-4 w-6" />
              Wallet
            </li>
            <li className="text-xl py-4 flex w-6">
              <img src="help.png" alt="help" className="mr-4 w-6" />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <img src="promotions.png" alt="promotions" className="mr-4 w-6" />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <img src="best.png" alt="best" className="mr-4 w-6" />
              Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <img src="friends.png" alt="friends" className="mr-4 w-6" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
