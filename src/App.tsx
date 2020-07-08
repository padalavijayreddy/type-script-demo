import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'
import HomeRoute from './routes/HomeRoute'
import SampleRoute from './routes/SampleRoute'
import stores from './stores'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import {
  HOME_ROUTE_PATH,
  SAMPLE_ROUTE_PATH,
  TODOS_ROUTE_PATH,
  POSTS_ROUTE_PATH,
  HOC_ROUTE_PATH,
  ANIMATIONS_ROUTE_PATH
} from './constants/NavigationConstants'
// import PostsRoute from './PostModule/routes/PostsRoute'

const TodosRoute = lazy(() => import('./routes/TodosRoute'))
const PostsRoute = lazy(() => import('./PostModule/routes/PostsRoute'))
const HocsRoute = lazy(() => import('./HocsModule/routes/hocsRoute'))

import AnimationRoute from './Animation/routes/AnimationRoutes'

import i18n from './i18n'
import Loader from './components/common/Icons/Loader/SvgFile'
// import HocsRoute from './HocsModule/routes/hocsRoute'

const App = () => {
  return (
    <Provider {...stores}>
      <I18nextProvider i18n={i18n}>
        <DndProvider backend={HTML5Backend}>
          <Suspense fallback={<div />}>
            <Router basename={process.env.PUBLIC_URL}>
              <Switch>
                <Route exact path={SAMPLE_ROUTE_PATH}>
                  <SampleRoute />
                </Route>
                <Route exact path={TODOS_ROUTE_PATH}>
                  <TodosRoute />
                </Route>
                <Route exact path={POSTS_ROUTE_PATH}>
                  <PostsRoute />
                </Route>
                <Route exact path={HOC_ROUTE_PATH}>
                  <HocsRoute />
                </Route>
                <Route path={ANIMATIONS_ROUTE_PATH}>
                  <AnimationRoute />
                </Route>
                <Route path={HOME_ROUTE_PATH}>
                  <HomeRoute />
                </Route>
              </Switch>
            </Router>
          </Suspense>
        </DndProvider>
      </I18nextProvider>
    </Provider>
  )
}

export default App
