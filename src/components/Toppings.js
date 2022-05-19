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

const orderVariants = {
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

export default function Toppings({ pizza, addTopping}) {
  const toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes']

  const ref = useRef(pizza)
  const [btnInitPos, setBtnInitPos] = useState('')

  useEffect(() => {
    (ref.current.topping) ? setBtnInitPos("100vw") : setBtnInitPos("-100vw")
  }, [])

  return (
    <motion.div className='topping wrapper'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
      { toppings.map(topping => (
        <motion.li key={topping} onClick={() => {addTopping(topping)}}
          whileHover={{ scale: 1.3, color: '#f8e122', originX: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className={pizza.toppings.includes(topping) ? 'active' : ''}>{topping}</span>
        </motion.li>
      ))}
      </ul>

      { pizza.toppings.length > 0 && (
        <motion.div className="next"
          variants={orderVariants}
          initial={{ x: btnInitPos }}
        >
          <Link to='/order'>
            <motion.button
              variants={buttonVariants}
              whileHover='hover'
            >Order</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}
