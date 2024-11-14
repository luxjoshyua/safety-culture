import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.blockOuter}>
      <div className={styles.blockInner}>
        <nav className={styles.footerNav} aria-label="Footer Navigation">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="https://status.safetyculture.com/" className={styles.navLink}>
                Status
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="https://safetyculture.com/legal/privacy-portal/"
                className={styles.navLink}>
                Privacy
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="https://safetyculture.com/legal/terms-and-conditions/"
                className={styles.navLink}>
                Terms and Conditions
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="https://safetyculture.com/security/" className={styles.navLink}>
                Security
              </Link>
            </li>
            <li className={styles.navItem}>
              <span className={styles.copyRight}>Safety Culture © 2023</span>
            </li>
          </ul>
        </nav>
        <nav className={styles.socialNav} aria-label="Social Media">
          <ul className={styles.socialList}>
            <li className={styles.socialItem}>
              <a
                href="https://www.instagram.com/safetyculturehq/"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                <Image src="/instagram.svg" alt="Instagram icon" width={25} height={25} />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="https://twitter.com/safetyculture"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter">
                <Image src="/twitter.svg" alt="Twitter icon" width={25} height={25} />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="https://www.linkedin.com/company/safetyculturehq/"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                <Image src="/linkedin.svg" alt="Linkedin icon" width={25} height={25} />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="https://www.youtube.com/c/SafetycultureAu"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube">
                <Image src="/youtube.svg" alt="Youtube icon" width={25} height={25} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
