import styles from './App.module.css';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';

const sidebar = {
  inactive: {
    width: '5rem'
  },
  active: {
    width: '25rem'
  }
}
const child = {
  inactive: {
    opacity: 0
  },
  active: {
    opacity: 1
  }
}

const App = () => {

  return (
    <main className={styles.app}>
      <motion.section 
        className={styles.sidebar}
        variants={sidebar}
        initial='inactive'
        whileHover='active'
      >
        <motion.div
          variants={child}
        >
          <Sidebar />
        </motion.div>
      </motion.section>
      <article className={styles.canvas}>
        <div className={styles.content}>

        </div>
      </article>
    </main>
  )
}

export default App
