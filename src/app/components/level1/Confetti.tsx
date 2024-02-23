import React from 'react';
import { motion } from 'framer-motion';


const ConfettiPiece = ({ x, y, rotate }: { x: number, y: number, rotate: number }) => {
  
  const animation = {
    initial: { y: 300, rotate: 0, x: 100 },
    animate: {
      y: [-500, y + 500],
      x: [x, x + (Math.random() - 0.5) * 200],
      rotate: rotate,
      repeat: Infinity,
    },
    transition: {
      y: { duration: 5, yoyo: Infinity, ease: 'linear' },
      x: { duration: 5, yoyo: Infinity, ease: 'linear' },
      rotate: { duration: 5, yoyo: Infinity, ease: 'linear' },
      repeat: Infinity
    }
  };

  return (
    <motion.div
      className="absolute w-2.5 h-2.5" 
      style={{
        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
      }}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    />
  );
};


const Confetti = () => {
  const confettiPieces = [];
  const numberOfPieces = 200; 

  for (let i = 0; i < numberOfPieces; i++) {
   
    const x = Math.random() * window.innerWidth - window.innerWidth / 2;
    const y = Math.random() * window.innerHeight - window.innerHeight / 2;
    const rotate = Math.random() * 360;
    confettiPieces.push(<ConfettiPiece key={i} x={x} y={y} rotate={rotate} />);
  }

  return (
    <div className="flex items-center flex-col w-full h-full">
      {confettiPieces}
    </div>) 
};

export default Confetti;
