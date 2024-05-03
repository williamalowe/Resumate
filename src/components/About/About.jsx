import styles from './About.module.css';

const About = ({ bio }) => {
  return (
    <article className={styles.about}>
      <div>Profile</div>
      <p>{bio}</p>
    </article>
  )
}

export default About
