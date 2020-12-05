import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import reducers from 'store/ducks'
import sagas from 'store/sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    timestamp: false
  }) as SagaMiddleware

  middlewares.push(logger)
}

export const store = createStore(reducers, applyMiddleware(...middlewares))

sagaMiddleware.run(sagas)
