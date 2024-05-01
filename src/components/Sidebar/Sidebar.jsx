import AboutInput from '../AboutInput/AboutInput';
import NameInput from '../NameInput/NameInput';
import SidebarHeader from '../SidebarHeader/SidebarHeader';
import styles from './Sidebar.module.css';

const Sidebar = ({ handleFirstName, handleLastName, handlePosition, handleBio }) => {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <div className={styles.input}>
        <fieldset>
          <legend>
            Name
          </legend>
        <NameInput 
          handleFirstName={handleFirstName}
          handleLastName={handleLastName}
        />
        </fieldset>
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
