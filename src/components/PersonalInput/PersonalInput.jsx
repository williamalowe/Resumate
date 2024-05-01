import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import styles from './PersonalInput.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const PersonalInput = ({ handleFirstName, handleMiddleName, handleLastName }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className={styles.personal}>
      <button onClick={() => setShowContent(!showContent)}>
        <div>Personal Info</div>
        {
          showContent ? 
            <div>
              <FontAwesomeIcon icon={faCaretUp} />
            </div>
            :
            <div>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>        
        }
      </button>
      <AnimatePresence>
        {
          showContent && 
          <motion.div
            className={styles.content}
            initial={{
              y: -10,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            exit={{
              y: -20,
              opacity: 0
            }}
          >
            <div className={styles.input}>
              <h5>First Name: </h5>
              <input type="text" placeholder='William' onChange={handleFirstName}/>
            </div>
            <div className={styles.input}>
              <h5>Last Name: </h5>
              <input type="text" placeholder='Lowe' onChange={handleLastName}/>
            </div>
            <div className={styles.input}>
              <h5>Middle Name (Optional): </h5>
              <input type="text" placeholder='Andrew' onChange={handleMiddleName}/>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default PersonalInput
