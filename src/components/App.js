import React, { useEffect, useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css' //スタイルが適用される

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  //json.parseで文字列をオブジェクトに変換
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])
  //json.stringifyでオブジェクトを文字列に変換

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App