import { CiChat1 } from "react-icons/ci"
import { MdOutlineMail } from "react-icons/md"
import { FiPhone } from "react-icons/fi"
import { GoPeople } from "react-icons/go"
import styles from "./MoreHelp.module.scss"
import { Button } from "../miscellaneous"

const MoreHelp = () => {
  return (
    <div className={styles.blockOuter}>
      <div className={styles.blockInner}>
        <h3 className={styles.blockHeading}>Need more help?</h3>
        <ul className={styles.blockButtons}>
          <li>
            <Button
              link="https://safetyculture.com/"
              bgColour="var(--link)"
              text="Live chat"
              textColour="var(--white)"
              width="200px"
              icon={<CiChat1 />}
            />
          </li>
          <li>
            <Button
              link="https://safetyculture.com/"
              bgColour="var(--link)"
              text="Email"
              textColour="var(--white)"
              width="200px"
              icon={<MdOutlineMail />}
            />
          </li>
          <li>
            <Button
              link="https://safetyculture.com/"
              bgColour="var(--link)"
              text="Email"
              textColour="var(--white)"
              width="200px"
              icon={<FiPhone />}
            />
          </li>
          <li>
            <Button
              link="https://safetyculture.com/"
              text="Ask the community"
              textColour="var(--link)"
              width="200px"
              icon={<GoPeople />}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MoreHelp
