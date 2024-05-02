import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Accordion.module.css';
import { useState } from 'react';

const Accordion = ({ header, children }) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.accordion}>
      <motion.button 
        onClick={() => setActive(!active)}
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
      >
        <div>{header}</div>
        <div>
          {
            active ?
            <FontAwesomeIcon icon={faCaretUp} />
            :
            <FontAwesomeIcon icon={faCaretDown} />
          }
        </div>
      </motion.button>
      <AnimatePresence>
      {
        active &&
        <motion.div 
          className={styles.content}
          initial={{
            opacity: 0,
            y: -10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          >
          {children}
        </motion.div>
      }
      </AnimatePresence>
    </div>
  )
}

export default Accordion
