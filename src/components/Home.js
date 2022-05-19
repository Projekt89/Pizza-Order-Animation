import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Loader from './Loader'

const buttonVariants = {
  hover: {
    scale: 1.05,  //keyframes
    textShadow: "0px 0px 8px rgba(255, 255, 255, 1)",
    boxShadow: "0px 2px 5px rgba(255, 255, 255, 0.7)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
}

const containerVariants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

export default function Home() {
  return (
    <motion.div className="wrapper"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}
