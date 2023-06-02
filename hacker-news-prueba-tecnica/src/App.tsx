import { ReactElement, Suspense, lazy } from 'react'
import { Route } from 'wouter'
import Header from './components/Header'

const TopStoriesPage = lazy(async () => await import('./pages/TopStories.tsx'))
const DetailPage = lazy(async () => await import('./pages/Details.tsx'))

function App (): ReactElement {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Route path='/' component={TopStoriesPage} />
          <Route path='/article/:id' component={DetailPage} />
        </Suspense>
      </main>
    </>

  )
}

export default App
