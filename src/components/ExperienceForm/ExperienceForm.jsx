import { motion } from "framer-motion";
import styles from "./ExperienceForm.module.css";
import { useState } from "react";

const ExperienceForm = ({ handleSubmit }) => {
  const [workplace, setWorkplace] = useState("");
  const [role, setRole] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [valid, setValid] = useState(true);

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

  const reset = () => {
    setWorkplace("");
    setRole("");
    setStart("");
    setEnd("");
    setDescription("");
  };

  const addExperience = (e) => {
    e.preventDefault();
    if (workplace === '' || role === '' || start === '' || end === '' || description === '') {
      setValid(false);
    } else {
      setValid(true);
      handleSubmit(workplace, role, convertDate(start), convertDate(end), description);
      reset();
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <h5>Workplace: </h5>
        <input
          type="text"
          placeholder="CoolCompany Pty Ltd"
          value={workplace}
          onChange={(e) => setWorkplace(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <h5>Position/Role: </h5>
        <input
          type="text"
          placeholder="Product Manger"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <h5>Start Date: </h5>
        <input
          type="month"
          placeholder="March 2023"
          min="1900-01"
          max="2999-12"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <h5>End Date: </h5>
        <input
          type="month"
          placeholder="Mar 2024"
          min="1900-01"
          max="2999-12"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </div>
      <div className={styles.description}>
        <h5>Responsibilities: </h5>
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Tell us about your role..."
          maxLength={240}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <motion.button
        onClick={addExperience}
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

export default ExperienceForm;
