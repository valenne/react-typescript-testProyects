import { ReactElement, useEffect, useState } from 'react'
import useSWRInfinite from 'swr/infinite'
import Story from '../components/Story.tsx'
import { getTopStories } from '../services/hacker-news.ts'
import { infinityButton } from './TopStories.css.ts'

export default function TopStoriesPage (): ReactElement {
  const [loadingPost, setLoadingPost] = useState(true)
  // const { data, error } = useSWR('/stories', async () => await getTopStories(1, 10))

  // 1. load data and create a pagination with infinity scroll with SRW package
  const { data, error, size, setSize, isLoading } = useSWRInfinite(
    (index: number): string => `stories/${index + 1}`,
    async (key: string): Promise <[]> => {
      const [, page] = key.split('/')
      setLoadingPost(!loadingPost)
      return await getTopStories(Number(page), 5)
    }
  )

  const dataFlatted: never[] | undefined = data?.flat()

  // 2. infinity scroll with useffect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        setSize((prevSize): number => prevSize + 1).catch(e => console.log(e))
      }
    }, {
      rootMargin: '-30px'
    })

    const chivatoElem: any = document.getElementById('chivato')

    setLoadingPost(!loadingPost)
    observer.observe(chivatoElem)
    return (): void => {
      observer.disconnect()
    }
  }, [setSize, isLoading, data])

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {(Boolean(error)) && <li>Something went wrong</li>}
        {dataFlatted?.map((id: number, index: number) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
      <button id='chivato' onClick={() => { setSize(size + 1).catch(e => console.log(e)) }} className={infinityButton}>{loadingPost ? 'Loading Posts' : 'More Posts'}</button>
    </div>
  )
}
