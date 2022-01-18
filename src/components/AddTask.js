import { useState } from "react";

const AddTask = ({onAdd}) =>{
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e)=> {
        e.preventDefault()
        if(!text) {
            alert('please input text')
            return
        }
        if(!day) {
            alert('please input day')
            return
        }
    
        onAdd({text, day, reminder})

        //setText('')
        //setDay('')
        //setReminder(false)
    }
    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder="add task content" value={text} onChange={(e)=> setText(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type='text' placeholder="add Date and Time" value={day} onChange={(e)=> setDay(e.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask;