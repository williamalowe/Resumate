import styles from './App.module.css';
import { motion } from 'framer-motion';
// import Sidebar from '../Sidebar/Sidebar';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import { useState } from 'react';
import PersonalInput from '../PersonalInput/PersonalInput';
import AboutInput from '../AboutInput/AboutInput';
import ContactInput from '../ContactInput/ContactInput';

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
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [middleName, setMiddleName] = useState(null);
  const [position, setPosition] = useState(null);
  const [bio, setBio] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);
  const [personalSite, setPersonalSite] = useState(null);
  const [streetAddress, setStreetAddress] = useState(null);

  return (
    <main className={styles.app}>
      <motion.section 
        className={styles.sidebar}
        variants={sidebar}
        initial='inactive'
        whileHover='active'
        transition={{
          delayChildren: 0.2
        }}
      >
        <motion.div
          variants={child}
        >
          {/* <Sidebar 
            handleFirstName={(e) => setFirstName(e.target.value)}
            handleLastName={(e) => setLastName(e.target.value)}
            handlePosition={(e) => setPosition(e.target.value)}
            handleBio={(e) => setBio(e.target.value)}
            handleContactNumber={(e) => setContactNumber(e.target.value)}
            handleEmail={(e) => setEmail(e.target.value)}
            handlePersonalSite={(e) => setPersonalSite(e.target.value)}
            handleAddress={(e) => setHomeAddress(e.target.value)}
          /> */}
          <SidebarHeader />
          <PersonalInput 
            handleFirstName={(e) => setFirstName(e.target.value)}
            handleLastName={(e) => setLastName(e.target.value)}
            handleMiddleName={(e) => setMiddleName(e.target.value)}
          />
          <ContactInput 
            handleContactNumber={(e) => setContactNumber(e.target.value)}
            handleEmailAddress={(e) => setEmailAddress(e.target.value)}
            handlePersonalSite={(e) => setPersonalSite(e.target.value)}
            handleStreetAddress={(e) => setStreetAddress(e.target.value)}
          />
          <AboutInput 
            handlePosition={(e) => setPosition(e.target.value)}
            handleBio={(e) => setBio(e.target.value)}
          />
          
        </motion.div>
      </motion.section>
      <article className={styles.canvas}>
        <div className={styles.content}>
          {firstName + ' ' + middleName + ' ' + lastName}
          <div>
            {position}
          </div>
          <div>
            {bio}
          </div>
          <div>
            {contactNumber}
          </div>
          <div>
            {emailAddress}
          </div>
          <div>
            {personalSite}
          </div>
          <div>
            {streetAddress}
          </div>
        </div>
      </article>
    </main>
  )
}

export default App
