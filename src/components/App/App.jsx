import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.css';
import Accordion from '../Accordion/Accordion';
import Logo from '../Logo/Logo';
import PersonalForm from '../PersonalForm/PersonalForm';
import ContactForm from '../ContactForm/ContactForm';
import SkillsForm from '../SkillsForm/SkillsForm';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [profession, setProfession] = useState(null);
  const [bio, setBio] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);
  const [personalSite, setPersonalSite] = useState(null);
  const [StreetAddress, setStreetAddress] = useState(null);
  const [skills, setSkills] = useState([]);

  const addSkill = (value) => {
    const newSkill = value;
    setSkills(skills => [...skills, newSkill])
  }

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
            {/* Personal Details */}
            <Accordion
              header="Personal Details"
            >
              <PersonalForm 
                handleFirstName={(e) => setFirstName(e.target.value)}
                handleLastName={(e) => setLastName(e.target.value)}
                handleProfession={(e) => setProfession(e.target.value)}
                handleBio={(e) => setBio(e.target.value)}
              />
            </Accordion>
            {/* Contact Details */}
            <Accordion
              header="Contact Details"
            >
              <ContactForm 
                handleContactNumber={(e) => setContactNumber(e.target.value)}
                handleEmailAddress={(e) => setEmailAddress(e.target.value)}
                handlePersonalSite={(e) => setPersonalSite(e.target.value)}
                handleStreetAddress={(e) => setStreetAddress(e.target.value)}
              />
            </Accordion>
            {/* Skills */}
            <Accordion
              header="Skills List"
            >
              <SkillsForm 
                handleSubmit={addSkill}
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
        {bio}-
        {contactNumber}-
        {emailAddress}-
        {personalSite}-
        {StreetAddress}-
        <ul>
          {
            skills.map((skill, index) => 
            <li key={index}>{skill}</li>
          )
          }
        </ul>
      </div>
    </main>
  )
}

export default App
