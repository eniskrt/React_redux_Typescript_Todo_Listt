import React from 'react'

const TodoCreate = () => {
  return (
    <div className='todo-create'>
        <input type="text" placeholder='Todo giriniz...' className='todo-input'/>
        <button className='todo-create-button'>Oluştur</button>
    </div>
  )
}

export default TodoCreate