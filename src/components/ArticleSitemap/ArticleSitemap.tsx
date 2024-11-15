import { IoMdHome } from "react-icons/io"
import styles from "./ArticleSitemap.module.scss"

const ArticleSitemap = () => {
  return (
    <nav className={styles.blockOuter}>
      <ul className={styles.blockInner}>
        <li className={styles.link}>
          <IoMdHome className={styles.icon} />
          SafetyCulture knowledge base
        </li>
        <li className={styles.link}>Using SafetyCulture</li>
        <li className={styles.link}>Actions</li>
        <li className={styles.link}>Assign actions to users and groups</li>
      </ul>
    </nav>
  )
}

export default ArticleSitemap
