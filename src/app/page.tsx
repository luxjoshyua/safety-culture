import { readJsonData } from "@/utilities"
import Header from "@/components/Header"
import Article from "@/components/Article"
import AppStoreDownload from "@/components/AppStoreDownload"
import Footer from "@/components/Footer"

export default async function Home() {
  const data = await readJsonData("/data/article.json")
  const { items } = data.pageProps
  // console.log("data", items)

  return (
    <div>
      <Header />
      <main>
        <Article articleData={items} />
        <AppStoreDownload />
      </main>
      <Footer />
    </div>
  )
}
