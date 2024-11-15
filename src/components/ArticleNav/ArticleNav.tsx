import Link from "next/link"
import styles from "./ArticleNav.module.scss"

const ArticleNav = () => {
  return (
    <nav className={styles.blockOuter}>
      <h4 className={styles.blockHeading}>In this article</h4>
      <ul className={styles.linksOuter}>
        <li className={styles.link}>
          <Link href="#">Why assign actions to users and groups?</Link>
        </li>
        <li className={styles.link}>
          <Link href="#">What you&apos;ll need</Link>
        </li>
        <li className={styles.link}>
          <Link href="#">Take note</Link>
        </li>
        <li className={styles.link}>
          <Link href="#">Assign an action to users and groups</Link>
        </li>
      </ul>
    </nav>
  )
}

export default ArticleNav
