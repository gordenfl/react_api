import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Foot from './components/Foot';


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false) //默认关闭
  //useState的数值在后期是不允许修改的，只有通过创建初期暴露出来的函数才能修改
  const [tasks, setTasks] = useState([])
  const getServerUrl = () => {
    //const serverIP = "18.144.86.135"
    const serverIP = "localhost"
    const serverPort = "5000"
    return `http://${serverIP}:${serverPort}`+"/tasks"
  }
  useEffect(()=> {
    const fetchTasks = async ()=> {
      const res = await fetch(getServerUrl())
      const data = await res.json()
  
      console.log(data)
      setTasks(data)
    }
    
    fetchTasks()
  }, [])  
  
  //add Task
  const addTask = async (taskInfo) => {
    const res = await fetch(getServerUrl(), 
        {
          method:"POST", 
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(taskInfo)          
        }
      )
      console.log(res)
    const data = await res.json()
    setTasks([...tasks, data])
  }

  //delete Task
  const deleteTask = async (id) => {
    await fetch(getServerUrl()+`/${id}`, {method:'DELETE'})
    setTasks(tasks.filter((task)=> task.id!==id)) //如果taskID不等于传进来的ID就不会调用setTasks只有不一样才set
  }
  //change reminder
  const fetchTaskToChange = async (id) => {
    const res = await fetch(getServerUrl()+`/${id}`)
    return await res.json()
  }
  const changeTask = async (id) => {
    const task_to_change = await fetchTaskToChange(id)
    console.log(task_to_change)
    const updateTask = {...task_to_change, reminder:!task_to_change.reminder}
    console.log(task_to_change)
    const res = await fetch(getServerUrl()+`/${id}`, {
      method : "PUT",
      headers:{'Content-type':'application/json'},
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {
      ...task, reminder:data.reminder
    }: task))
  }

  return (
    <div className="container">
      <Header showAdd={()=> setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      { showAddTask && <AddTask onAdd={addTask} />}
      <div style={{textAlign:"center"}}>
        
        {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onChange={changeTask}/> : "Nothing"}
      </div>
      <Foot />
    </div>
  )
}

/*
class App extends React.Component {
  render(){
    return <div className='container'><Header  title='gordon' age="12" /></div>
  }
}
*/
export default App;

