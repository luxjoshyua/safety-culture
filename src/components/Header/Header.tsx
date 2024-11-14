import Link from "next/link"
import Image from "next/image"
import { CiLogin } from "react-icons/ci"
import { CiSearch } from "react-icons/ci"
import styles from "./Header.module.scss"

import LanguageDropdown from "../LanguageDropdown/LanguageDropdown"
import { Button } from "../miscellaneous"

const Header: React.FC = () => {
  return (
    <header className={styles.blockHeader}>
      <div className={styles.blockInner}>
        <Link href="/">
          <Image src="/sc-logo-color.svg" alt="Safety Culture logo" width={200} height={30} />
        </Link>
        <div className={styles.blockSearch}>
          <input
            type="text"
            placeholder="Search anything... (e.g. devices)"
            className={styles.searchInput}
          />
          <CiSearch className={styles.searchIcon} />
        </div>
        <div className={styles.blockButtons}>
          <LanguageDropdown />
          <ul className={styles.blockButtonsInner}>
            <li>
              <Button
                icon={<CiLogin />}
                text="Log in"
                link="/login"
                bgColour="var(--white)"
                width="100px"
                textColour="var(--link)"
                border="var(--border-width) solid var(--grey-two)"
              />
            </li>
            <li>
              <Button
                text="Contact us"
                link="/contact"
                bgColour="var(--link)"
                textColour="var(--white)"
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
