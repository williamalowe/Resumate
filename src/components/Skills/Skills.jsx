import styles from './Skills.module.css';

const Skills = ({ skillsList }) => {
  return (
    <div className={styles.skills}>
      <h5>Skills</h5>
      <ul>
        {
          skillsList.map((skill, index) => 
          <li key={index}>
            {skill}
          </li>
        )
        }
      </ul>
    </div>
  )
}

export default Skills
