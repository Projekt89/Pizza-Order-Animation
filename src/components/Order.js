import React, { useEffect } from 'react'
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
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 4
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

export default function Order({ pizza, reset, setShowModal }) {
  useEffect(() => {
    setTimeout(() => {setShowModal(true)},4000)
  }, [setShowModal])


  return (
    <motion.div className='order wrapper'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h3>Thank you for your order :)</h3>
      <motion.div className='toppings' variants={childVariants}>
        <p>{`You orderer a ${pizza.base} pizza with:`}</p>
        <ul>
        {pizza.toppings.map(topping => (
          <li key={topping}>
          <span>{topping}</span>
          </li>
        ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}
