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

  const convertDate = (date) => {
    const months = [
      ['01', 'Jan'],
      ['02', 'Feb'],
      ['03', 'Mar'],
      ['04', 'Apr'],
      ['05', 'May'],
      ['06', 'Jun'],
      ['07', 'Jul'],
      ['08', 'Aug'],
      ['09', 'Sep'],
      ['10', 'Oct'],
      ['11', 'Nov'],
      ['12', 'Dec'],
    ]
    const year = date.slice(0, 4);
    let month;
    for (let i = 0; i < months.length; i ++) {
      if (date.slice(5, 7) === months[i][0]) {
        month = months[i][1];
      }
    }
    return month + ' ' + year;
  }

  const addEducation = (e) => {
    e.preventDefault();
    handleSubmit(studyField, institute, convertDate(start), convertDate(completion));
    reset();
  };

  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <h5>Qualification: </h5>
        <input
          type="text"
          placeholder="Bachelor of Computer Science"
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
          type="month"
          placeholder="Jan 2020"
          min="1900-01"
          max="2999-12"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <h5>Completion Date: </h5>
        <input
          type="month"
          placeholder="Jan 2024"
          min="1900-01"
          max="2999-12"
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
    </form>
  );
};

export default EducationForm;
