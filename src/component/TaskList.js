import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const TaskList = () => {
    const tabTasks = useSelector(state => state.tabTasks)
    return (
        <div>
{tabTasks.map((item)=><Task item={item} key={item.id}/>)}

        </div>
    )
}

export default TaskList
