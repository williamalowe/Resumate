import styles from './Header.module.css';

const Header = ({ name, profession }) => {
  let displayName = name;
  let displayProfession = profession;

  if (name === null + ' ' + null || name === ' ') {
    displayName = '[Your Name Here]'
  }
  if (profession === null) {
    displayProfession = '-Your Profession Here-';
  }

  console.log(displayName);
  

  return (
    <div className={styles.header}>
      <h1>{displayName}</h1>
      <h5>{displayProfession}</h5>
    </div>
  )
}

export default Header
