import { ReactElement } from 'react'
import useSWR from 'swr'
import { getItemsInfo } from '../services/hacker-news'
import { relativeTimeForLanguage } from '../utils/getRelativeTime'
import ListOfCommentsLoader from './ListOfCommentsLoader'

function Comments (props: { id: number }): any {
  const { id } = props
  const { data, isLoading } = useSWR(`/comment/${id}}`, async (): Promise<any> => await getItemsInfo(id))

  if (isLoading) {
    return <ListOfCommentsLoader />
  }

  const { by, text, time, kids } = data

  return (
    <>
      <details open>
        <summary>
          <small>
            <span>{by}</span>
            <span>.</span>
            <span>{relativeTimeForLanguage(time, 'en')}</span>
          </small>
        </summary>
        <p>{text}</p>
      </details>
      {kids?.length > 0 && <ListOfComments ids={kids?.slice(0, 10)} />}
    </>
  )
}

export default function ListOfComments (props: {
  ids: number[]
}): ReactElement {
  const { ids } = props
  return (
    <ul style={{ listStyle: 'none' }}>
      {ids?.map((id: number): ReactElement => (
        <li key={id}>
          <Comments id={id} />
        </li>
      ))}

    </ul>
  )
}
