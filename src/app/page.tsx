import { readJsonData } from "@/utilities"
import Header from "@/components/Header"

export default async function Home() {
  const data = await readJsonData("/data/article.json")
  const { items } = data.pageProps
  console.log("data", items)

  // components I need are;
  // Header
  // Main Article
  // Sidebar - in this article
  // Need more help
  // Was this page useful
  // Download links
  // Footer

  return (
    <div>
      <Header />
      <main>
        <h1>app</h1>
      </main>
    </div>
  )
}
