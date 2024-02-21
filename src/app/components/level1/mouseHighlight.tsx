import React, { useState, useEffect } from 'react';
import './level1.css';

const MouseHighlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [shouldUpdatePosition, setShouldUpdatePosition] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      if (shouldUpdatePosition) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
      setShouldUpdatePosition(false);
      requestAnimationFrame(() => {
        setShouldUpdatePosition(true);
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', updateScrollPosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [shouldUpdatePosition]);

  return (
    <div>
      <div
        className="mouse-highlight"
        style={{
          left: position.x - 80,
          top: position.y - 80 + scrollPosition,
        }}
      ></div>
    </div>
  );
};

export default MouseHighlight;
