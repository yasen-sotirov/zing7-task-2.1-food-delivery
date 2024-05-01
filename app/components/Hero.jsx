import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px]  relative">
        {/* Overlay */}
        <div
          className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center
        font-bold"
        >
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-orange-500">Food</span> Delivery
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};

export default Hero;
