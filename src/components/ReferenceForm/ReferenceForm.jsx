import { motion } from "framer-motion";
import styles from "./ReferenceForm.module.css";
import { useState } from "react";

const ReferenceForm = ({ handleSubmit }) => {
  const [referenceName, setReferenceName] = useState("");
  const [referenceRelation, setReferenceRelation] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [referenceEmail, setReferenceEmail] = useState("");
  const [valid, setValid] = useState(true);

  const reset = () => {
    setReferenceName("");
    setReferenceRelation("");
    setReferenceNumber("");
    setReferenceEmail("");
  };

  const addReference = (e) => {
    e.preventDefault();
    if (referenceName === '' || referenceRelation === '' || referenceNumber === '' || referenceEmail === '') {
      setValid(false);
    } else {
      setValid(true);
      handleSubmit(
        referenceName,
        referenceRelation,
        referenceNumber,
        referenceEmail,
      );
      reset();
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <h5>Reference Name: </h5>
        <input
          type="text"
          placeholder="Joe Mama"
          value={referenceName}
          onChange={(e) => setReferenceName(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <h5>Reference Relation: </h5>
        <input
          type="text"
          placeholder="Previous Supervisor"
          value={referenceRelation}
          onChange={(e) => setReferenceRelation(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <h5>Contact Number: </h5>
        <input
          type="number"
          placeholder="0412 345 678"
          maxLength='12'
          value={referenceNumber}
          onChange={(e) => setReferenceNumber(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <h5>Email Address: </h5>
        <input
          type="email"
          placeholder="ReferenceName@provider.com"
          value={referenceEmail}
          onChange={(e) => setReferenceEmail(e.target.value)}
        />
      </div>
      <motion.button
        onClick={addReference}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        Add
      </motion.button>
      {
        !valid && 
        <p>Please enter all required fields.</p>
      }
    </form>
  );
};

export default ReferenceForm;
