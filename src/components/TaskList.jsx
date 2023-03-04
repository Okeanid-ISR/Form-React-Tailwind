import React from 'react';

import { useReducer } from "react";
import { Header } from "./Header";
import { Task } from "./Task";
import { taskReducer, errorReducer } from "./reducer";
import Container from "./Container";
import Footer from "./Footer";
import {v4 as uuidv4} from 'uuid';

const uniqueId = uuidv4
export default function TaskList() {
    // const [taskList, setTaskList] = useLocalStorage("taskList", []);
    const [taskList, dispatchTaskList] = useReducer(taskReducer, []);
    const [error, dispatchError] = useReducer(errorReducer, "");

    const countCompletedTasks = taskList.reduce(
        (acc, value) => (value.completed ? acc + 1 : acc),
        0
    );

    const handleCleanError = () => {
        dispatchError({ type: "CLEAN_ERROR" });
    };

    const handleSubmit = (task) => {
        // сброс ошибки
        dispatchError({ type: "CLEAN_ERROR" });

        // пустая задача
        if (!task) {
            dispatchError({
                type: "SHOW_ERROR",
                text: "Пожалуйста, укажите название задачи",
            });
            return;
        }

        dispatchTaskList({ type: "ADD_TASK", task });
    };

    const handleCompleteTask = (value, id) => {
        dispatchTaskList({ type: "COMPLETE_TASK", value, id });
    };

    const handleRemoveTask = (id) => {
        dispatchTaskList({ type: "REMOVE_TASK", id });
    };

    return (
        <Container>
            <Header onSubmit={handleSubmit}/>
            {error && <div>{error}
                <button onClick={handleCleanError}>x</button>
            </div>}
            {taskList.map((task, index) => (
                <Task
                    title={task.name}
                    key={task.id}
                    indx={index + 1}
                    uniqueId={uniqueId}
                    completed={task.completed}
                    onChange={(value) => handleCompleteTask(value, task.id)}
                    onRemove={() => handleRemoveTask(task.id)}
                >
                </Task>
            ))}
            <Footer arr={taskList} countChecked={0} completedArr={taskList}/>
        </Container>
    );
}
