"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();
    setmainTask([...mainTask, {title,desc}])
    console.log(title);
    console.log(desc);
    settitle("");
    setdesc("");
  }
  
  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i) => {
      return(
        <li key={i} className='flex items-center justify-between mb-4'>
          <div className='flex items-center justify-between mb-4 w-2/3'>
            <h5 className='text-2xl '>{t.title}</h5>
            <h6 className='text-xl'>{t.desc}</h6>
          </div>
          <button 
          onClick={()=>{
            deleteHandler(i);
          }} 
          className='bg-black text-white px-4 py-2 rounded font-bold'> Delete </button>
        </li>
      )
    }) 
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
      My Todo List
    </h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-2xl border-4 border-blue m-2 px-2 py-2' placeholder='Enter Title here' value={title} onChange={(e) =>{
        // console.log(e.target.value)
        settitle(e.target.value);
      }}/>
      <input type='text' className='text-2xl border-4 border-yellow m-2 px-2 py-2' placeholder='Enter Task here' value={desc} onChange={(e) =>{
        setdesc(e.target.value);
      }}/>
      <button className='bg-black text-white px-2 py-3 text-3xl font-bold rounded m-5'>Add Task</button>
    </form>
    <hr/>
    <div className="p-8">
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page
