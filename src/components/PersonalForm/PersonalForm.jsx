import styles from './PersonalForm.module.css';

const PersonalForm = ({ handleFirstName, handleLastName, handleProfession, handleBio }) => {
  return (
    <div className={styles.form}>
      <div className={styles.input}>
        <h5>First Name: </h5>
        <input type="text" placeholder='William' onChange={handleFirstName}/>
      </div>
      <div className={styles.input}>
        <h5>Last Name: </h5>
        <input type="text" placeholder='Lowe' onChange={handleLastName}/>
      </div>
      <div className={styles.input}>
        <h5>Profession: </h5>
        <input type="text" placeholder='Frontend Developer' onChange={handleProfession}/>
      </div>
      <div className={styles.bio}>
        <h5>About You:</h5>
        <textarea name="bio" id="" cols="30" rows="10" placeholder='Tell us about yourself...' onChange={handleBio}></textarea>
      </div>
    </div>
  )
}

export default PersonalForm
