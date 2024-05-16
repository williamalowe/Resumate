import { faRemove } from '@fortawesome/free-solid-svg-icons';
import styles from './RemovalList.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RemovalList = ({ target, inputList, setList }) => {

  const handleRemoval = (target, setList) => {
    let newList = inputList.filter((item) => item !== target);
    setList([...newList]);
  }

  return (
    <ul className={styles.list}>
        {
          inputList.map((item, e) => 
          <li key={e}>
            <div className={styles.item}>
              {target === 'skills' && <>{item}</>}
              {target === 'experience' && <>{item.role + ' @ ' + item.workplace}</>}
              {target === 'education' && <>{item.studyField + ' @ ' + item.institute}</>}
              {target === 'references' && <>{item.name}</>}
              <div className={styles.button}>
              <motion.button
              onClick={() => handleRemoval(item, setList)}
              whileHover={{
                  scale: 1.5
                }}
                whileTap={{
                  scale: 0.9
                }}
              >
                <FontAwesomeIcon icon={faRemove} />
              </motion.button>
            </div>
            </div>
          </li>
          )
        }
    </ul>
  )
}

export default RemovalList
