import styles from './ContactInput.module.css';

const ContactInput = ({ handleContactNumber, handleEmail, handlePersonalSite, handleAddress }) => {
  return (
    <div className={styles.contact_input}>
      <div className={styles.input}>
        <h5>Contact Number: </h5>
        <input onChange={handleContactNumber} placeholder='0412345678'/>
      </div>
      <div className={styles.input}>
        <h5>Email Address: </h5>
        <input onChange={handleEmail} placeholder='FakeMail@GeeMail.com'/>
      </div>
      <div className={styles.input}>
        <h5>Personal Site (optional): </h5>
        <input onChange={handlePersonalSite} placeholder='mypersonalsite.com'/>
      </div>
      <div className={styles.input}>
        <h5>Home Address (optional): </h5>
        <input onChange={handleAddress} placeholder='123 Fake Street, Melbourne'/>
      </div>
    </div>
  )
}

export default ContactInput
