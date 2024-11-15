"use client"
import React, { useState } from "react"
import Image from "next/image"
import styles from "./ArticleTabs.module.scss"

interface Content {
  nodeType: string
  value?: string
  data?: any
  content?: Content[]
}

interface Tab {
  id: string
  title: string
  content: string
}

interface ArticleTabsProps {
  fields: {
    internal: string
    tabs: Tab[]
    header: string
  }
}

const parseContent = (content: Content[]): JSX.Element[] => {
  return content.map((node, index) => {
    switch (node.nodeType) {
      case "paragraph":
        return <p key={index}>{parseContent(node.content || [])}</p>
      case "hyperlink":
        return (
          <a key={index} href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {parseContent(node.content || [])}
          </a>
        )
      case "list-item":
        return (
          <li key={index} className={styles.numberedList}>
            {parseContent(node.content || [])}
          </li>
        )

      case "ordered-list":
        return (
          <ol key={index} className={styles.numberedListOuter}>
            {node.content?.map((item, idx) => (
              <React.Fragment key={idx}>
                {parseContent([item])}
                {idx === 2 && (
                  <div className={styles.embeddedImage}>
                    <Image
                      src="/browser.jpg"
                      alt="Image of Safety Culture browser user interface"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </ol>
        )

      case "unordered-list":
        return <ul key={index}>{parseContent(node.content || [])}</ul>

      case "embedded-entry-inline":
        const { label, url } = node.data.target.fields
        return url ? (
          <a key={index} href={url} className={styles.link}>
            {label}
          </a>
        ) : (
          <span key={index} className={styles.link}>
            {label}
          </span>
        )

      case "text":
        return node.value || ""
      default:
        return <span key={index}>{parseContent(node.content || [])}</span>
    }
  })
}

const ArticleTabs: React.FC<ArticleTabsProps> = ({ fields }) => {
  const { header, tabs } = fields
  const [activeTab, setActiveTab] = useState<number>(0)

  const renderTabContent = (tab: Tab) => {
    return <div>{parseContent(tab.fields.body.content)}</div>
  }

  return (
    <section className={styles.blockOuter}>
      {header && <h2 className={styles.blockSecondaryHeading}>{header}</h2>}
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={tab.sys.id}
            className={`${styles.tab} ${activeTab === index ? styles.active : ""}`}
            onClick={() => setActiveTab(index)}>
            {tab.fields.header}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs.length > 0 && renderTabContent(tabs[activeTab])}
      </div>
    </section>
  )
}

export default ArticleTabs
