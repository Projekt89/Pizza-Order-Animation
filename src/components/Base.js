import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const nextVariants = {
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
}

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

export default function Base({ addBase, pizza }) {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']
  const ref = useRef(pizza)
  const [btnInitPos, setBtnInitPos] = useState('')

  useEffect(() => {
    (ref.current.base) ? setBtnInitPos("100vw") : setBtnInitPos("-100vw")
  }, [])

  return (
    <motion.div className="base wrapper"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : ''
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, color: '#f8e122', originX: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
          initial={{ x: btnInitPos }}
        >
          <Link to='/toppings'>
            <motion.button
              variants={buttonVariants}
              whileHover='hover'
            >Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}
