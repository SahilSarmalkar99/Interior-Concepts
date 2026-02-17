import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import img from "../../assets/display/bg1.png"

const HeroImage = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      imgRef.current,
      {
        scale: 1.5,
        filter: "grayscale(100%) brightness(0.6)",
      },
      {
        scale: 1,
        filter: "grayscale(0%) brightness(1)",
        duration: 3,
        delay: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="absolute inset-0 ">
      <img
        ref={imgRef}
        src={img}
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Blur Layer */}
      {/* <div className="hero-blur" /> */}
      <div className="absolute inset-0 
                bg-gradient-to-r 
                from-[#1A1A1A]/60 
                via-[#1A1A1A]/35 
                to-transparent
                md:from-[#1A1A1A]/45 
                md:via-[#1A1A1A]/25">
</div>

    </div>
  );
};

export default HeroImage;
