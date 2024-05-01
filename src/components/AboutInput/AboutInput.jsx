import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import styles from './AboutInput.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const AboutInput = ({ handlePosition, handleBio }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className={styles.about}>
      <button onClick={() => setShowContent(!showContent)}>
        <div>About You</div>
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
              y: -10,
              opacity: 0
            }}
          >
            <div className={styles.input}>
              <h5>Position/Role: </h5>
              <input type="text" placeholder='Frontend Developer' onChange={handlePosition}/>
            </div>
            <div className={styles.input}>
              <h5>Bio: </h5>
              <textarea name="" id="" cols="30" rows="10" placeholder='Tell us about yourself...' onChange={handleBio}></textarea>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default AboutInput
