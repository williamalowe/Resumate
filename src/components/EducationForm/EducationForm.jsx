import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./EducationForm.module.css";

const EducationForm = ({ handleSubmit }) => {
  const [studyField, setStudyField] = useState("");
  const [institute, setInstitute] = useState("");
  const [start, setStart] = useState("");
  const [completion, setCompletion] = useState("");

  const reset = () => {
    setStudyField("");
    setInstitute("");
    setStart("");
    setCompletion("");
  };

  const addEducation = () => {
    handleSubmit(studyField, institute, start, completion);
    reset();
  };

  return (
    <div className={styles.form}>
      <div className={styles.input}>
        <h5>Field of Study: </h5>
        <input
          type="text"
          placeholder="Bachelors of Computer Science"
          value={studyField}
          onChange={(e) => setStudyField(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <h5>Institute: </h5>
        <input
          type="text"
          placeholder="Awesome Uni, Melbourne"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <h5>Start Date: </h5>
        <input
          type="text"
          placeholder="Jan 2020"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <h5>Completion Date: </h5>
        <input
          type="text"
          placeholder="Jan 2024
        "
          value={completion}
          onChange={(e) => setCompletion(e.target.value)}
        />
      </div>
      <motion.button
        onClick={addEducation}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        Add
      </motion.button>
    </div>
  );
};

export default EducationForm;
