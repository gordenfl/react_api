import React from 'react';
import './App.css';
import { useState} from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false) //默认关闭
  //useState的数值在后期是不允许修改的，只有通过创建初期暴露出来的函数才能修改
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Document1 print',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
    {
        id:2,
        text: 'Document2 print',
        day: 'Feb 7th at 2:30pm',
        reminder: false,
    },
    {
        id:3,
        text: 'Document3 print',
        day: 'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id:4,
        text: 'Document4 print',
        day: 'Feb 3th at 2:30pm',
        reminder: false,
    },
    {
        id:5,
        text: 'Document5 print',
        day: 'Feb 15th at 2:30apm',
        reminder: false,
    },
  ])
  //add Task
  const addTask = (taskInfo) => {
    const id = Math.floor(Math.random()*10000)+1
    const newTask = {id, ...taskInfo}
    setTasks([...tasks, newTask])
  }

  //delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id!==id)) //如果taskID不等于传进来的ID就不会调用setTasks只有不一样才set
  }
  //change reminder
  const changeTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {
      ...task, reminder:!task.reminder
    }: task))
  }

  return (
    <div className="container">
      <Header showAdd={()=> setShowAddTask(!showAddTask)}/>
      { showAddTask && <AddTask onAdd={addTask} />}
      <div style={{textAlign:"center"}}>
        
        {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onChange={changeTask}/> : "Nothing"}
      </div>
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

