'use client'
import { motion } from 'framer-motion'
import React from 'react'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
}

export function Motion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={variants} initial="hidden" animate="enter" transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}
export function MotionView({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{
        y: 0,
        opacity: 1,

        transition: {
          delay: 0.3,
          duration: 0.5,
        },
      }}>
      {children}
    </motion.div>
  )
}
