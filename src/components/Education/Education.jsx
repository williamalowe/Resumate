import styles from './Education.module.css';

const Education = ({ educationList }) => {
  return (
    <article className={styles.education}>
      <h5>Education</h5>
      {
        educationList.map((edu, index) => 
        <div className={styles.item} key={index}>
          <h5>{edu.studyField}</h5>
          <h3>{edu.institute}</h3>
          <p>{edu.start} - {edu.completion}</p>
        </div>
      )
      }
    </article>
  )
}

export default Education
