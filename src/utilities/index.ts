import { promises as fs } from "fs"

const readJsonData = async (path: string) => {
  try {
    const file = await fs.readFile(process.cwd() + path, "utf8")
    return JSON.parse(file)
  } catch (error) {
    console.error(error)
  }
}

export { readJsonData }
