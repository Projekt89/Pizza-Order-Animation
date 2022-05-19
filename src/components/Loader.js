import React from 'react'
import { motion, useCycle } from 'framer-motion'

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear'
      },
      y: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeOut'
      }
    }
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        duration: 0.25,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeOut'
      }
    }
  }
}


export default function Loader() {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")
  return (
    <>
      <motion.div className='loader'
        variants={loaderVariants}
        animate={animation}
      >

      </motion.div>
      <div
        style={{cursor: 'pointer'}}
        onClick={() => cycleAnimation()}
      >
        Cycle Loader
      </div>
    </>
  )
}
