import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import loginReducer from './components/login/loginReducer'
import homeReducer from './components/home/homeReducer'
import quizzReducer from './components/quizz/quizzReducer'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
})

const Store = createStore(combineReducers({homeReducer:homeReducer, loginReducer:loginReducer, quizzReducer:quizzReducer}),
composeWithDevTools(
  applyMiddleware(
    ReduxThunk,
    logger
  ),
))

export default Store