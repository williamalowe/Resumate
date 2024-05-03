import styles from './Experience.module.css';

const Experience = ({ experienceList }) => {
  return (
    <article className={styles.experience}>
      <h5>Work Experience</h5>
      {
        experienceList.map((exp, index) => 
        <div className={styles.item} key={index}>
          <h3>{exp.workplace}</h3>
          <h5>{exp.role}</h5>
          <h5>{exp.start} - {exp.end}</h5>
          <p>{exp.description}</p>
        </div>
      )
      }
    </article>
  )
}

export default Experience
