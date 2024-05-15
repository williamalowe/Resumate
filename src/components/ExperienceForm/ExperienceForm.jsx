import { motion } from "framer-motion";
import styles from "./ExperienceForm.module.css";
import { useState } from "react";

const ExperienceForm = ({ handleSubmit }) => {
  const [workplace, setWorkplace] = useState("");
  const [role, setRole] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");

  const reset = () => {
    setWorkplace("");
    setRole("");
    setStart("");
    setEnd("");
    setDescription("");
  };

  const addExperience = () => {
    handleSubmit(workplace, role, start, end, description);
    reset();
  };

  return (
    <div className={styles.form}>
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
          type="text"
          placeholder="Mar 2023"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <h5>End Date: </h5>
        <input
          type="text"
          placeholder="Mar 2024"
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
    </div>
  );
};

export default ExperienceForm;
