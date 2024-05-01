import AboutInput from '../AboutInput/AboutInput';
import ContactInput from '../ContactInput/ContactInput';
import NameInput from '../NameInput/NameInput';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import styles from './Sidebar.module.css';

const Sidebar = ({ handleFirstName, handleLastName, handlePosition, handleBio, handleContactNumber, handleEmail, handlePersonalSite, handleAddress }) => {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <div className={styles.input}>
        {/* name */}
        <fieldset>
          <legend>
            Name
          </legend>
        <NameInput 
          handleFirstName={handleFirstName}
          handleLastName={handleLastName}
        />
        </fieldset>
        {/* contact */}
        <fieldset>
          <legend>
            Contact
          </legend>
          <ContactInput 
            handleContactNumber={handleContactNumber}
            handleEmail={handleEmail}
            handlePersonalSite={handlePersonalSite}
            handleAddress={handleAddress}
          />
        </fieldset>
        {/* bio */}
        <fieldset>
          <legend>
            About
          </legend>
          <AboutInput 
            handlePosition={handlePosition}
            handleBio={handleBio}
          />
        </fieldset>
      </div>
    </div>
  )
}

export default Sidebar
