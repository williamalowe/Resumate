import styles from './AboutInput.module.css';

const AboutInput = ({ handlePosition, handleBio }) => {
  return (
    <div className={styles.about_input}>
      <div className={styles.input}>
        <h5>Position: </h5>
        <input onChange={handlePosition} placeholder='Frontend Developer'/>
      </div>
      <div className={styles.input}>
        <h5>Bio: </h5>
        <textarea name="bio" id="" cols="30" rows="10" onChange={handleBio} placeholder='Tell us about yourself...'></textarea>
      </div>
    </div>
  )
}

export default AboutInput
