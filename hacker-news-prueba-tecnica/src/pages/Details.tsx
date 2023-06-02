import { ReactElement, useEffect } from 'react'
import useSWR from 'swr'
import ListOfComments from '../components/ListOfComments'
import ListOfCommentsLoader from '../components/ListOfCommentsLoader'
import { getItemsInfo } from '../services/hacker-news'

interface AppProps {
  params: {
    id: string
  }
}

export default function DetailPage (props: AppProps): ReactElement | undefined {
  const { id } = props.params
  const { data, isLoading } = useSWR('/stories', async () => { return await getItemsInfo(Number(id)) })

  useEffect(() => {
    const { title }: { title: string } = data ?? {}

    if (title !== undefined) {
      document.title = `News - ${title}`
    }
  }, [])

  const commentsIds = data?.kids === undefined ? [] : data?.kids.slice(0, 10)

  if (commentsIds.length === 0) {
    return <ListOfCommentsLoader />
  }

  return (
    (
      <div className=''>
        {
          isLoading
            ? <ListOfCommentsLoader />
            : <ListOfComments ids={commentsIds} />
        }
      </div>
    )
  )
}
