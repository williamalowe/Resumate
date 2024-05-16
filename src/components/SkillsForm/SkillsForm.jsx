import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import styles from "./SkillsForm.module.css";
import { useState } from "react";

const SkillsForm = ({ handleSubmit }) => {
  const [newSkill, setNewSkill] = useState("");
  const [valid, setValid] = useState(true);

  const addSkill = (e) => {
    e.preventDefault();
    if (newSkill === '') {
      setValid(false);
    } else {
      setValid(true);
      handleSubmit(newSkill);
      setNewSkill("");
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <h5>Add Skill:</h5>
        <input
          type="text"
          placeholder="JavaScript"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <motion.button
          onClick={addSkill}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </motion.button>
          {
            !valid && 
            <p>Please enter a skill to add.</p>
          }
      </div>
    </form>
  );
};

export default SkillsForm;
