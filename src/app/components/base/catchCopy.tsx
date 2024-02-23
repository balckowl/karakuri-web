"use client"
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./base.css"

function CatchCopy() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["ようこそ、からくり館へ"],
      typeSpeed: 60,
      loop: true,
      backDelay: 3000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App mb-2 h-[40px]">
      <span ref={el} className="text-white text-3xl"/>
    </div>
  );
}

export default CatchCopy;