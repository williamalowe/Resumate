import styles from './About.module.css';

const About = ({ bio }) => {
  return (
    <article className={styles.about}>
      <h5>Profile</h5>
      <p>{bio}</p>
    </article>
  )
}

export default About
