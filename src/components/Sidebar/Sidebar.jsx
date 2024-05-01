import SidebarHeader from '../SidebarHeader/SidebarHeader';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarHeader /> 
    </div>
  )
}

export default Sidebar
