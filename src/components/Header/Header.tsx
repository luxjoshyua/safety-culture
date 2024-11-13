import Link from "next/link"
import Image from "next/image"
import styles from "./Header.module.scss"
import { FaSearch } from "react-icons/fa"
import LanguageDropdown from "./LanguageDropdown"

const Header: React.FC = () => {
  return (
    <header className={styles.blockHeader}>
      <div className={styles.blockInner}>
        {/* logo */}
        <Link href="/">
          <Image src="/sc-logo-color.svg" alt="Safety Culture logo" width={200} height={30} />
        </Link>

        {/* search input field and language dropdown */}
        <div className={styles.blockSearch}>
          <input
            type="text"
            placeholder="Search anything... (e.g. devices)"
            className={styles.searchInput}
          />
          <FaSearch className={styles.searchIcon} />
        </div>

        {/* login and contact us buttons */}
        <div>
          <LanguageDropdown />
        </div>
      </div>
    </header>
  )
}

export default Header
