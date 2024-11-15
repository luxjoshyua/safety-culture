import styles from "./Article.module.scss"
import ArticleNav from "../ArticleNav"
import ArticleSection from "../ArticleSection"
import ArticleTabs from "../ArticleTabs"
import { BodyContent } from "../ArticleSection/ArticleSection"
import MoreHelp from "../MoreHelp"
import PageHelpful from "../PageHelpful"
import ArticleSitemap from "../ArticleSitemap"

interface Props {
  articleData: {
    title: string
    description: string
    content: Array<ContentEntry>
    updated: string
  }
}

export interface Fields {
  internal: string
  body: BodyContent
  tabs?: Record<string, unknown>
}

interface ContentEntry {
  sys: {
    contentType: {
      sys: {
        id: string
      }
    }
    id: string
  }
  fields: Fields
}

const Article: React.FC<Props> = (props) => {
  const { title, description, content, updated } = props.articleData

  const dateFormatted = new Date(updated).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  // render different article types depending on the sys.contentType.sys.id
  const renderInnerArticleTypes = (entry: ContentEntry) => {
    const articleId = entry.sys.id
    const contentType = entry.sys.contentType.sys.id
    const fields = entry.fields
    // console.log(fields)
    switch (contentType) {
      // entry 0 and 2 are the same id type
      case "articleSection":
        return <ArticleSection id={articleId} fields={fields} />
      // entry 3
      case "articleTabs":
        return <ArticleTabs fields={fields} />
      default:
        break
    }
  }

  return (
    <article>
      <ArticleSitemap />
      <section className={styles.blockOuter}>
        <ArticleNav />
        <div className={styles.blockInner}>
          <div className={styles.blockDetails}>
            <span className={styles.blockActions}>Actions</span>
            {dateFormatted && (
              <div className={styles.blockActionsInner}>
                <p>Last updated: </p>
                <span className={styles.blockLastUpdated}> {dateFormatted}</span>
              </div>
            )}
          </div>
          <div className={styles.blockTop}>
            {title && <h1 className={styles.blockHeading}>{title}</h1>}
            {description && <p className={styles.blockDescription}>{description}</p>}
            <span className={styles.blockDivider} />
          </div>
          <div className={styles.blockMain}>
            {content.map((entry) => (
              <div key={entry.sys.id}>{renderInnerArticleTypes(entry)}</div>
            ))}
          </div>
        </div>
        <MoreHelp />
        <PageHelpful />
      </section>
    </article>
  )
}

export default Article
