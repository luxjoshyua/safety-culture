import { CiCircleCheck } from "react-icons/ci"
import Link from "next/link"
import styles from "./ArticleSection.module.scss"
import { Fields } from "../Article/Article"

interface ArticleSectionProps {
  id: string
  fields: Fields
}

interface ContentNode {
  nodeType: string
  content?: Array<{
    value?: string
    content?: Array<{
      value?: string
      content?: Array<{
        value?: string
      }>
    }>
  }>
}

export interface BodyContent {
  data: Record<string, unknown>
  content: ContentNode[]
  nodeType: string
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ id, fields }) => {
  const { body } = fields

  const renderContent = (node: ContentNode) => {
    switch (node.nodeType) {
      case "heading-2":
        return <h2 className={styles.blockSecondaryHeading}>{node.content?.[0]?.value}</h2>
      case "unordered-list":
        return (
          <ul className={styles.OuterListItem}>
            {node.content?.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item.content?.[0]?.content?.[0]?.value}
              </li>
            ))}
          </ul>
        )
      case "paragraph":
        if (!node.content?.[0]?.value) return null
        return <p className={styles.paragraph}>{node.content[0].value}</p>

      case "list-item":
        return node.content?.[0]?.content?.[0]?.value
      default:
        return null
    }
  }

  return (
    <div className={styles.blockOuter}>
      {(body as BodyContent)?.content?.map((node, index) => (
        <div key={`${id}-${index}`}>{renderContent(node)}</div>
      ))}
      {id === "1cLsN5QgRbPBqHo1940R2U" && (
        <div className={styles.blockContent}>
          <h3 className={styles.blockHeading}>What you&apos;ll need</h3>
          <div className={styles.blockInner}>
            <CiCircleCheck className={styles.blockIcon} />
            <p>
              Any{" "}
              <Link href="https://safetyculture.com/pricing/" target="_blank">
                SafetyCulture plan
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ArticleSection
