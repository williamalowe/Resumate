import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.css';
import Accordion from '../Accordion/Accordion';
import Logo from '../Logo/Logo';
import PersonalForm from '../PersonalForm/PersonalForm';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [profession, setProfession] = useState(null);

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
              header="Personal Details"
            >
              <PersonalForm 
                handleFirstName={(e) => setFirstName(e.target.value)}
                handleLastName={(e) => setLastName(e.target.value)}
                handleProfession={(e) => setProfession(e.target.value)}
              />
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
        {firstName}-
        {lastName}-
        {profession}-
      </div>
    </main>
  )
}

export default App
