import { useState } from 'react'

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={userInput}
                type="text"
                maxLength="30"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="What needs to be done?"
            />        
            <button>Add</button>
        </form>
    )
}

export default ToDoForm