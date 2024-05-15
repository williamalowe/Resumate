import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import styles from "./SkillsForm.module.css";
import { useState } from "react";

const SkillsForm = ({ handleSubmit }) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    handleSubmit(newSkill);
    setNewSkill("");
  };

  return (
    <div className={styles.form}>
      <h5>Add Skill:</h5>
      <div className={styles.input}>
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
      </div>
    </div>
  );
};

export default SkillsForm;
