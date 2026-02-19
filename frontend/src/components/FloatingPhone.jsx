import React from "react";
import { FaPhone } from "react-icons/fa";

const FloatingPhone = () => {
  return (
    <div className="relative group">
      <a
  href="tel:+919372770662"
  className="flex items-center -rotate-90 justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl transition-transform duration-300 hover:scale-110"
>
  <FaPhone size={20} className="rotate-180" />
</a>


      {/* Hover Text */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 whitespace-nowrap shadow-md">
        Call Now
      </span>
    </div>
  );
};

export default FloatingPhone;
