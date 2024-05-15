import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faEnvelope,
  faGlobe,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Contact.module.css";

const Contact = ({
  contactNumber,
  emailAddress,
  personalSite,
  streetAddress,
}) => {
  let displayNumber = contactNumber;

  if (contactNumber) {
    if (displayNumber.length === 10) {
      displayNumber =
        contactNumber.slice(0, 4) +
        " " +
        contactNumber.slice(4, 7) +
        " " +
        contactNumber.slice(7, 10);
    }
  }

  return (
    <article className={styles.contact}>
      <h5>Contact</h5>
      <div className={styles.fields}>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faMobile} />
          <p>{displayNumber}</p>
        </div>
        <div className={styles.item}>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>{emailAddress}</p>
        </div>
        {personalSite && (
          <div className={styles.item}>
            <FontAwesomeIcon icon={faGlobe} />
            <p>{personalSite}</p>
          </div>
        )}
        {streetAddress && (
          <div className={styles.item}>
            <FontAwesomeIcon icon={faLocationPin} />
            <p>{streetAddress}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default Contact;
