"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function Bactop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollToTop = () => {
    const scrollStep = -window.scrollY / 30;
    const scroll = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scroll);
      }
    };
    requestAnimationFrame(scroll);
  };

  return (
    show && (
      <button
        onClick={smoothScrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-[#180e28f9]  text-white  backdrop-blur-xl hover:bg-[#290e28f9] p-3 rounded-full shadow-lg  transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp />
      </button> 
    )
  );
}
