import Image from "next/image"
import Link from "next/link"
import styles from "./AppStoreDownload.module.scss"

const AppStoreDownload = () => {
  return (
    <section className={styles.blockOuter}>
      <div className={styles.blockInner}>
        <ul className={styles.blockLinks}>
          <li className={styles.blockLink}>
            <Link href="https://safetyculture.com/">
              <Image
                src="/sc-logo-color.svg"
                alt="Safety Culture logo"
                width={150}
                height={30}
                className={styles.blockLinkImage}
              />
            </Link>
          </li>
          <li className={styles.blockLink}>
            <Link href="https://safetyculture.com/text-me-the-app/">
              <Image
                src="/app-store.svg"
                alt="Safety Culture logo"
                width={115}
                height={40}
                className={styles.blockLinkImage}
              />
            </Link>
          </li>
          <li className={styles.blockLink}>
            <Link href="https://safetyculture.com/text-me-the-app/">
              <Image
                src="/google-play-store.svg"
                alt="Safety Culture logo"
                width={135}
                height={40}
                className={styles.blockLinkImage}
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AppStoreDownload
