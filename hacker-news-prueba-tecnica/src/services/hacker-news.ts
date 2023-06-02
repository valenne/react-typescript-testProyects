
export const getTopStories = async (page: number, limit: number): Promise<[]> => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  const body = await response.json()

  // page starts with 1
  const startIndex = (page - 1) * limit
  const endIndex = (startIndex + limit)
  const ids = body.slice(startIndex, endIndex)
  return ids
}

export const getItemsInfo = async (id: number): Promise<any> => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const body = await response.json()

  return body
}
