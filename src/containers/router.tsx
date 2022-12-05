import Vote from '@components/Vote'
import Layout from '@src/Layout'
import { EnvironmentInitialitzationOptions, VocdoniSDKClient } from '@vocdoni/sdk'
import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { App } from './App'
import Error404 from './Error404'
import RouteError from './RouteError'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<App />} />
      <Route
        element={<Vote />}
        errorElement={<RouteError />}
        path='/process/:pid'
        loader={async ({params}) =>
          await new VocdoniSDKClient({
            env: EnvironmentInitialitzationOptions.DEV,
            electionId: params.pid,
          }).fetchElection()
        }
      />
      <Route path='*' element={<Error404 />} />
    </Route>
  )
)

export default router
