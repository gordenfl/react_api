import { useState } from "react";
import DateTimePicker from 'react-datetime-picker';

const AddTask = ({onAdd}) =>{
    const [text, setText] = useState('');
    const [day, setDay] = useState(new Date());
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

        setText("")
        setDay("")
        setReminder("")

    }
    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' autoFocus placeholder="add task content" value={text} onChange={(e)=> setText(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <div>
                    <DateTimePicker 
                        onChange={setDay} 
                        value={day} 
                        amPmAriaLabel="Select AM/PM"
                        calendarAriaLabel="Toggle calendar"
                        clearAriaLabel="Clear value"
                        dayAriaLabel="Day"
                        hourAriaLabel="Hour"
                        maxDetail="second"
                        minuteAriaLabel="Minute"
                        monthAriaLabel="Month"
                        nativeInputAriaLabel="Date and time"
                        secondAriaLabel="Second"
                        yearAriaLabel="Year"
                        format="y-MM-dd h:mm:ss a"
                    />
                </div>
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