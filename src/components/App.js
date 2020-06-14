import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' //スタイルが適用される
import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  )
}

export default App