import styles from './References.module.css';

const References = ({ referenceList }) => {
  return (
    <article className={styles.references}>
      <h5>References</h5>
      {
        referenceList.map((ref, index) => 
        <div className={styles.item} key={index}>
          <h3>{ref.name}</h3>
          <h5>{ref.relationship}</h5>
          <p>Phone: {ref.contactNumber}</p>
          <p>Email: {ref.emailAddress}</p>
        </div>
      )
      }
    </article>
  )
}

export default References
