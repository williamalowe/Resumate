import styles from "./ContactForm.module.css";

const ContactForm = ({
  handleContactNumber,
  handleEmailAddress,
  handlePersonalSite,
  handleStreetAddress,
}) => {
  return (
    <div className={styles.form}>
      <div className={styles.input}>
        <h5>Contact Number: </h5>
        <input
          type="number"
          placeholder="0412 345 678"
          maxLength={12}
          onChange={handleContactNumber}
        />
      </div>
      <div className={styles.input}>
        <h5>Email Address: </h5>
        <input
          type="email"
          placeholder="PersonalEmail@Provider.com"
          onChange={handleEmailAddress}
        />
      </div>
      <div className={styles.input}>
        <h5>Personal Site (Optional): </h5>
        <input
          type="text"
          placeholder="PersonalSite.com"
          onChange={handlePersonalSite}
        />
      </div>
      <div className={styles.input}>
        <h5>Street Address (Optional): </h5>
        <input
          type="text"
          placeholder="123 Street Name, Suburb, City"
          onChange={handleStreetAddress}
        />
      </div>
    </div>
  );
};

export default ContactForm;
