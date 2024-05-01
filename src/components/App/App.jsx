import styles from './App.module.css';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <main className={styles.app}>
      <motion.section className={styles.sidebar}
        initial={{
          width: '5rem',
        }}
        whileHover={{
          width: '25vw'
        }}
      >
        
      </motion.section>
      <article className={styles.canvas}>
        <div className={styles.content}>

        </div>
      </article>
    </main>
  )
}

export default App
