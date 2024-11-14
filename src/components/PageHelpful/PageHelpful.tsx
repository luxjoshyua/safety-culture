import { PiThumbsUp, PiThumbsDown } from "react-icons/pi"

import styles from "./PageHelpful.module.scss"
import { Button } from "../miscellaneous"

const PageHelpful = () => {
  return (
    <div className={styles.blockOuter}>
      <div className={styles.blockInner}>
        <p className={styles.blockText}>Was this page helpful? {"{US}"}</p>
        <Button
          text="Yes {US}"
          bgColour="var(--white)"
          border="var(--border-width) solid var(--grey-two)"
          link="https://safetyculture.com/contact-us/"
          textColour="var(--link)"
          width="115px"
          icon={<PiThumbsUp className={styles.blockIcon} />}
        />
        <Button
          text="No {US}"
          bgColour="var(--white)"
          border="var(--border-width) solid var(--grey-two)"
          link="https://safetyculture.com/contact-us/"
          textColour="var(--link)"
          width="115px"
          icon={<PiThumbsDown className={styles.blockIcon} />}
        />
        <Button
          text="Contact us"
          bgColour="transparent"
          link="https://safetyculture.com/contact-us/"
          textColour="var(--link)"
          width="115px"
        />
      </div>
    </div>
  )
}

export default PageHelpful
