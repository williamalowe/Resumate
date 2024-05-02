import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.css';
import Accordion from '../Accordion/Accordion';
import Logo from '../Logo/Logo';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <main className={styles.app}>
      <AnimatePresence mode='wait'>
        {
          showSidebar &&
          <motion.div 
            className={styles.sidebar_content}
            initial={{
              width: 0
            }}
            animate={{
              width: '20vw'
            }}
            exit={{
              width: 0
            }}
          >
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
            >
            <Logo />
            <Accordion
              header="testy"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime modi deleniti distinctio, asperiores nesciunt quibusdam animi libero possimus eum. Modi laboriosam eligendi similique nemo? Iure exercitationem enim aliquid voluptates perferendis!
            </Accordion>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
      <div className={styles.sidebar}>
        <motion.button 
          className={styles.sidebar_button}
          onClick={() => setShowSidebar(!showSidebar)}
          whileHover={{
            scale: 1.1
          }}
          whileTap={{
            scale: 0.9
          }}
        >
          {
            showSidebar ? 
            <FontAwesomeIcon icon={faCaretLeft} />
            :
            <FontAwesomeIcon icon={faCaretRight} />
          }
        </motion.button>
      </div>
      <div className={styles.content}>
        Content
      </div>
    </main>
  )
}

export default App
