import { ReactElement } from 'react'
import ContentLoader from 'react-content-loader'

export default function ListOfCommentsLoader (): ReactElement {
  return (
    <ContentLoader
      speed={2}
      width={320}
      height={100}
      viewBox='0 0 320 100'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'

    >
      <rect x='4' y='-11' rx='0' ry='0' width='491' height='38' />
      <rect x='348' y='38' rx='0' ry='0' width='7' height='6' />
      <rect x='23' y='36' rx='0' ry='0' width='300' height='15' />
      <rect x='41' y='58' rx='0' ry='0' width='300' height='11' />
      <rect x='12' y='80' rx='0' ry='0' width='491' height='38' />
      <rect x='31' y='127' rx='0' ry='0' width='300' height='15' />
      <rect x='49' y='149' rx='0' ry='0' width='300' height='11' />
    </ContentLoader>
  )
}
