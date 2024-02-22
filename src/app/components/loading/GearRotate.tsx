"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const GearRotate = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <motion.div
        animate={{ rotate: [0, 360] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-[100px] h-[100px]"
      >
        <Image src="/images/loading/gear.png" width={100} height={100} alt="" />
      </motion.div>
      <div className="font-bold text-[30px] ml-[25px]">
        <p>
          Now Loading
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 0.6, duration: 0.6 }}
          >.</motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 0.6, duration: 0.6, delay: 0.2 }}
          >.</motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 0.6, duration: 0.6, delay: 0.4 }}
          >.</motion.span>
        </p>
      </div>
    </div>
  )
}

export default GearRotate