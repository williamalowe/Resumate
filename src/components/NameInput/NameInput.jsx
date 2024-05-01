import styles from './NameInput.module.css';

const NameInput = ({ handleFirstName, handleLastName }) => {
  return (
    <div className={styles.name_input}>
      <div className={styles.input}>
        <h5>First Name: </h5>
        <input onChange={handleFirstName} placeholder='John/Jane'/>
      </div>
      <div className={styles.input}>
        <h5>Last Name: </h5>
        <input onChange={handleLastName} placeholder='Doe'/>
      </div>
    </div>
  )
}

export default NameInput
