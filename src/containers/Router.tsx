import Layout from '@src/Layout'
import { Route, Routes } from 'react-router-dom'
import { App } from './App'
import Error404 from './Error404'

const Router = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<App />} />
      <Route path='*' element={<Error404 />} />
    </Route>
  </Routes>
)

export default Router
