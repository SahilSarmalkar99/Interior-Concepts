import React from "react";
import aboutImg from "../../assets/display/cafe.png";

const AboutSection = () => {
  return (
    <section className="relative bg-[#F3F3F1] py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#1E1E1E]">
            We Offer You Professional
            <span className="block text-[#A66A3F] mt-2">
              Interior Design
            </span>
          </h3>

          <p className="text-neutral-600 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore.
          </p>

          <p className="text-neutral-500 max-w-xl">
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Signature */}
          <div className="pt-4">
            <div className="italic text-lg text-neutral-800">
              Mark Mcguire
            </div>
            <div className="text-sm text-neutral-500">
              CEO
            </div>
          </div>

          {/* Actions */}
          <div className="pt-8 flex flex-wrap items-center gap-8">

            <button className="px-8 py-3 bg-[#A66A3F] text-white rounded-md hover:bg-[#8F5734] transition duration-300 shadow-md">
              Read More
            </button>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#A66A3F]/20 flex items-center justify-center text-[#A66A3F] text-lg">
                📞
              </div>
              <div>
                <div className="text-sm text-neutral-500">
                  Have any question?
                </div>
                <div className="text-lg font-semibold text-[#1E1E1E]">
                  +92 123 456 7890
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center md:justify-end">

          {/* Black frame */}
          <div className="absolute top-6 right-6 w-[85%] h-[90%] bg-black"></div>

          {/* Image */}
          <img
            src={aboutImg}
            alt="Interior"
            className="relative z-10 w-[85%] object-cover shadow-2xl"
          />

          {/* Testimonial Card */}
          <div className="absolute -bottom-8 left-8 bg-black text-white p-6 w-72 shadow-xl">
            <p className="text-sm text-neutral-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="mt-4 font-semibold">
              Sophia Lawson
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
