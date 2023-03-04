import React, {useReducer} from 'react';
import {Header} from './Header';
import {Task} from './Task';
import {initialTaskList} from './state';
import {taskReducer, errorReducer} from './reducer';
import Container from './Container';
import Footer from './Footer';
import { v4 as uuidv4 } from 'uuid';

const uniqueId = uuidv4()

export default function TaskList() {
    const storageKey = "taskList";
    const [taskList, dispatchTaskList] = useReducer(
        taskReducer,
        initialTaskList(storageKey, [])
    );
    const [error, dispatchError] = useReducer(errorReducer, "");

    const countCompletedTasks = taskList ? taskList.reduce(
        (acc, value) => (value.completed ? acc + 1 : acc),
        0
    ) : 0;

    const handleCleanError = () => {
        dispatchError({type: "CLEAN_ERROR"});
    };

    const handleSubmit = (task) => {
        dispatchError({type: "CLEAN_ERROR"});
        if (!task) {
            dispatchError({
                type: "SHOW_ERROR",
                text: alert("Please input your task!"),
            });
            return;
        }

        const taskExists = taskList.find((t) => t.name === task);
        if (taskExists) {
            dispatchError({
                type: "SHOW_ERROR",
                text: alert("Task already exists!"),
            });
            return;
        }

        dispatchTaskList({type: "ADD_TASK", task, storageKey});
    };

    const handleCompleteTask = (value, id) => {
        dispatchTaskList({
            type: "COMPLETE_TASK",
            value,
            id,
            storageKey,
        });
    };

    const handleRemoveTask = (id) => {
        dispatchTaskList({type: "REMOVE_TASK", id, storageKey});
    };

    return (
        <Container>
            <Header onSubmit={handleSubmit}/>
            {error && (
                <div>
                    {error}
                    <button onClick={handleCleanError}>x</button>
                </div>
            )}
            {taskList.map((task, index) => (
                <Task
                    title={task.name}
                    key={task.id}
                    indx={index + 1}
                    completed={task.completed}
                    onChange={(value) => handleCompleteTask(value, task.id)}
                    onRemove={() => handleRemoveTask(task.id)}
                />
            ))}
            <Footer
                arr={taskList}
                countChecked={countCompletedTasks}
            />
        </Container>
    );
}

export default TaskList