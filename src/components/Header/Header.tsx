"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CiLogin, CiSearch } from "react-icons/ci"
import { FaBars, FaTimes } from "react-icons/fa"
import styles from "./Header.module.scss"
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown"
import { Button } from "../miscellaneous"

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const toggleMobileMenuActive = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <header className={styles.blockHeader}>
      <div className={styles.blockInner}>
        <Link href="https://safetyculture.com/" target="_blank">
          <Image
            src="/sc-logo-color.svg"
            alt="Safety Culture logo"
            width={200}
            height={30}
            className={styles.logo}
          />
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

        <div className={`${styles.mobileIcons} ${mobileMenuOpen ? styles.active : ""}`}>
          {mobileMenuOpen && (
            <div className={styles.mobileSearchIcon}>
              <CiSearch />
            </div>
          )}
          <div
            className={styles.mobileMenuIcon}
            onClick={toggleMobileMenuActive}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            role="button"
            tabIndex={0}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileMenuList}>
            <li>
              <Link href="/get-started" onClick={toggleMobileMenuActive}>
                Get Started
              </Link>
            </li>
            <li>
              <Link href="/using-safetyculture" onClick={toggleMobileMenuActive}>
                Using SafetyCulture
              </Link>
            </li>
            <li>
              <Link href="/administration" onClick={toggleMobileMenuActive}>
                Administration
              </Link>
            </li>
            <li>
              <Link href="/integrations" onClick={toggleMobileMenuActive}>
                Integrations
              </Link>
            </li>
            <li>
              <Link href="/account-settings" onClick={toggleMobileMenuActive}>
                Account Settings
              </Link>
            </li>
            <li>
              <Link href="/fixing-problems" onClick={toggleMobileMenuActive}>
                Fixing Problems
              </Link>
            </li>
            <li>
              <LanguageDropdown />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
