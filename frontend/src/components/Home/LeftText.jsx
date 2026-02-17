import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

const LeftText = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Heading words stagger
    tl.from(containerRef.current.querySelectorAll(".word"), {
      y: 80,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1.2,
      stagger: 0.25,
      ease: "power3.out",
    })
      // Paragraph after heading
      .from(
        containerRef.current.querySelector(".para"),
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4",
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-2xl 
           flex flex-col 
           items-center text-center 
           md:items-start md:text-left 
            md:mt-0"
    >
      {/* Heading */}
      <h1
        className="text-[28px] sm:text-[34px] md:text-[60px]
               leading-[1.05] 
               tracking-tight
               font-[font1]
               text-[#F5F3EF]"
      >
        <span className="word block ">Designs That</span>
        <span
          className="word block text-white font-extrabold 
                 text-[1.08em] 
                 tracking-wide 
                 drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]"
        >
          Speak Your
        </span>

        <span className="word block ">Way of Living</span>
      </h1>

      {/* Paragraph */}
      <p
        className="para mt-5 max-w-md
             text-[15px] sm:text-[16px] md:text-[22px]
             leading-relaxed
             font-medium
             text-[rgba(243,241,236,0.92)]
"
      >
        From concept to completion, we design interiors that feel personal,
        practical, and timeless — bringing your vision to life with expert
        craftsmanship. 20+ years of experience
      </p>
    </div>
  );
};

export default LeftText;
