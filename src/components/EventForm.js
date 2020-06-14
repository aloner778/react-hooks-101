import React, { useState } from 'react'
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions'

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })

    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault() //リロードが行われないようにする
    const result = window.confirm('全てのイベントを本当に削除しても良いです')
    if (result) dispatch({ type: DELETE_ALL_EVENTS })
    //ダイアログでokを選択するとresultはtrueになる
  }

  const unCreatable = title === '' || body ==='' //真偽値を調べる書き方
  
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea type="text" className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
      </form>
    </>
  )
}

export default EventForm