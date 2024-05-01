import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import styles from './ContactInput.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const ContactInput = ({ handleContactNumber, handleEmailAddress, handlePersonalSite, handleStreetAddress }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className={styles.contact}>
      <button onClick={() => setShowContent(!showContent)}>
        <div>Contact Details</div>
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
              <h5>Contact Number: </h5>
              <input type="text" placeholder='0412 345 678' onChange={handleContactNumber}/>
            </div>
            <div className={styles.input}>
              <h5>Email Address: </h5>
              <input type="text" placeholder='YourEmail@provider.com' onChange={handleEmailAddress}/>
            </div>
            <div className={styles.input}>
              <h5>Personal Site (Optional): </h5>
              <input type="text" placeholder='PersonalSite.com' onChange={handlePersonalSite}/>
            </div>
            <div className={styles.input}>
              <h5>Street Address (Optional): </h5>
              <input type="text" placeholder='123 Street, Suburb, City' onChange={handleStreetAddress}/>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default ContactInput
