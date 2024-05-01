import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import styles from './SkillsInput.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faCaretUp, faPlus } from '@fortawesome/free-solid-svg-icons';

const SkillsInput = ({ handleClick }) => {
  const [showContent, setShowContent] = useState(false);
  const [newSkill, setNewSkill] = useState(null);

  const addSkill = () => {
    handleClick(newSkill);
    setNewSkill(null);
  }

  return (
    <div className={styles.skills}>
      <button onClick={() => setShowContent(!showContent)}>
        <div>Add Skills</div>
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
              <h5>Skill: </h5>
              <div>
                <input type="text" placeholder='JavaScript' value={newSkill} onChange={(e)=>setNewSkill(e.target.value)} />
                <button onClick={addSkill}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}

export default SkillsInput
