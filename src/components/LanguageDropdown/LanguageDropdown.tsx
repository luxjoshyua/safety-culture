"use client"
import { useState, useRef } from "react"
import { FaGlobe, FaChevronDown } from "react-icons/fa"
import styles from "./LanguageDropdown.module.scss"

const languages = ["English (US)", "Deutsch", "Español", "Français", "Nederlands", "Português"]

const LanguageDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)")
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language)
    setIsOpen(false)
  }

  return (
    <div className={styles.languageDropdown} ref={dropdownRef}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        <FaGlobe className={styles.icon} />
        <span>{selectedLanguage}</span>
        <FaChevronDown className={styles.icon} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {languages
            .filter((lang) => lang !== selectedLanguage)
            .map((lang) => (
              <li key={lang} onClick={() => selectLanguage(lang)} className={styles.dropdownItem}>
                {lang}
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageDropdown
