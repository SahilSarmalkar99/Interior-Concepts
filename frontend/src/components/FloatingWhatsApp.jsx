import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <div className="relative group">
      <a
        href="https://wa.me/919372770662?text=Hello%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp size={22} />
      </a>

      {/* Hover Text */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 whitespace-nowrap shadow-md">
        Chat Now
      </span>
    </div>
  );
};

export default FloatingWhatsApp;
