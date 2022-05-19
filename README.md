# React project about pizza order. Website using React with Framer Motion library

Main takeaways:
- import { motion } from 'framer-motion'

// using variants. instead of keys in object these can be applied directly in element in animate, initial etc.
- const buttonVariants = {
  'hidden': {
      // values from which animation starts
  },
  'visible': {
    // values to animate,
    transition: {
      // how the animation is going to play out
    }
  }
} // variants keys are propagated to children if applied on parent (P animate='visible' > Ch animate='visible')

// way of applying motion to elements
<motion.button
  // here values of animate
  variants={buttonVariants}
  initial='hidden'
  animate={{ scale: 1.05, borderRadius: '50%' }}
> </motion.button>

// AnimatePresence is a way to animate components out of the propagate. All Elements that have to animate on exit have to be inside <AnimatePresence> </AnimatePresence>. State after exit is declared in property:
exit={{ x: '-100vh' }} and can be stated in variants object.
exitBeforeEnter - parameter of AnimatePresence it wait for exit animation to end before changing route
onExitComplete - parameter allowing to fire a function after every exit animation finish

// in svg, hidden pathLength: 0, visible: pathLength: 1 - allow to draw svg along the line

// useCycle('animationOne','animationTwo', etc). If i declare several position in variants i can use these animations in useCycle hook import from framer to cycle these animations every time the cycleAnimation() is called

// drag - allow dragging, dragConstraints = {{ top: 0, left: 0, etc}} - limits of area it can be dragged, dragElastic={ 0.5 } - defines how easly can item be dragged. closer to 0 harder to drag, 1 follows the cursor
