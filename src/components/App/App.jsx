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
import ExperienceForm from '../ExperienceForm/ExperienceForm';
import EducationForm from '../EducationForm/EducationForm';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [profession, setProfession] = useState(null);
  const [bio, setBio] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);
  const [personalSite, setPersonalSite] = useState(null);
  const [streetAddress, setStreetAddress] = useState(null);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [references, setReferences] = useState([]);

  const addSkill = (value) => {
    const newSkill = value;
    setSkills(skills => [...skills, newSkill])
  }

  const addExperience = (workplace, role, start, end, description) => {
    const newExperience = {
      workplace: workplace,
      role: role,
      start: start,
      end: end,
      description: description
    };
    setExperience(experience => [...experience, newExperience]);
  }

  const addEducation = (studyField, institute, start, completion) => {
    const newEducation = {
      studyField: studyField,
      institute: institute,
      start: start,
      completion: completion
    };
    setEducation(education => [...education, newEducation]);
  }

  const addReference = ( referenceName, referenceRelationship, referenceNumber, referenceEmail ) => {
    const newReference = {
      name: referenceName,
      relationship: referenceRelationship,
      contactNumber: referenceNumber,
      emailAddress: referenceEmail
    };
    setReferences(references => [...references, newReference]);
  }

  return (
    <main className={styles.app}>
      <AnimatePresence mode='wait'>
        {
          showSidebar &&
          <motion.div 
            className={styles.sidebar_content}
            initial={{
              width: 0,
              paddingLeft: 0
            }}
            animate={{
              width: '25vw',
              paddingLeft: '2rem'
            }}
            exit={{
              width: 0,
              paddingLeft: 0
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
            {/* Work Experience */}
            <Accordion
              header="Work Experience"
            >
              <ExperienceForm 
                handleSubmit={addExperience}
              />
            </Accordion>
            {/* Education*/}
            <Accordion
              header="Education"
            >
              <EducationForm 
                handleSubmit={addEducation}
              />
            </Accordion>
            {/* References */}
            <Accordion
              header="References"
            >
              
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
      <section className={styles.content}>
        <div className={styles.outlet}>
          <Header 
            name={firstName + ' ' + lastName}
            profession={profession}
          />
          <div className={styles.outlet_body}>
            <div>
              {/* left content */}
              <Contact 
                contactNumber={contactNumber}
                emailAddress={emailAddress}
                personalSite={personalSite}
                streetAddress={streetAddress}
              />
              <Skills 
                skillsList={skills}
              />
              <Education 
                educationList={education}
              />
            </div>
            <div>
              {/* right content */}
              <About 
                bio={bio}
              />
              <Experience 
                experienceList={experience}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
