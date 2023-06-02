import { ReactElement } from 'react'
import useSWR from 'swr'
import { Link } from 'wouter'
import { getItemsInfo } from '../services/hacker-news'
import { relativeTimeForLanguage } from '../utils/getRelativeTime'
import { storyFooter, storyHeader, storyLink, storyTitle } from './Story.css'
import StoryLoader from './StoryLoader'

export default function Story (props: { id: number, index: number }): ReactElement {
  const { id, index } = props
  const { data, isLoading } = useSWR(`/stories/${id}}`, async () => await getItemsInfo(id))

  if (isLoading) {
    // show placeholder
    return <StoryLoader />
  }

  const { by, kids, score, title, url, time } = data

  let domain: string = ''
  if (url !== undefined) {
    try {
      domain = new URL(url).hostname
      domain.replace('www', '')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <article className=''>
      <header className={storyHeader}>
        <small>{index + 1} .</small>
        <a
          className={storyTitle}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >{title}
        </a>
        <a
          className={storyLink}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          ({domain})
        </a>

      </header>
      <footer className={storyFooter}>
        <span>{score} points</span>
        <Link className={storyLink} href={`/article/${id}`}>by {by} </Link>
        <time dateTime={new Date(time * 1000).toLocaleDateString()}>
          <Link className={storyLink} href={`/article/${id}`}>{relativeTimeForLanguage(time, 'en')}</Link>
        </time>
        <Link className={storyLink} href={`/article/${id}`}>{kids?.length ?? 0} comments </Link>
      </footer>
    </article>
  )
}
