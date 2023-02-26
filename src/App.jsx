import Header from './components/Header'
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Task from "./components/Task";
import { v4 as uuidv4 } from 'uuid';

export function App() {
    const [taskList, setTaskList] = useState([]);
    const [completedTaskList, setCompletedTaskList] = useState([]);
    const [error, setError] = useState("");
    const [isCheckedMap, setIsCheckedMap] = useState({});

    const uniqueId = uuidv4();

    const removeTask = (task) => {
        const newTaskList = taskList.filter((t) => t !== task);

        window.localStorage.setItem("taskList", JSON.stringify(newTaskList));

        setTaskList(newTaskList);
    };

    const removeCompletedTask = (task) => {
        setCompletedTaskList(completedTaskList.filter((t) => t !== task));
    }

    const handleRemoveTask = (task) => {
        removeTask(task);
        removeCompletedTask(task);
        const savedTaskList = JSON.parse(localStorage.getItem('taskList')) || [];
        const newTaskList = savedTaskList.filter((t) => t !== task);
        window.localStorage.setItem("taskList", JSON.stringify(newTaskList));
    };

    const addTask = (task) => {
        if (!task) return;
        const newTaskList = [...taskList, task];
        window.localStorage.setItem("taskList", JSON.stringify(newTaskList));
        setTaskList(newTaskList);
    };

    const onSubmit = (task) => {
        setError("");
        if (!task) return;
        if (!taskList) {
            addTask(task);
            return;
        }
        if (taskList.includes(task)) {
            alert("This task already exists!");
            return;
        }
        addTask(task);
    };


    const handleCompleteTask = (event, task) => {
        const checked = event.target.checked;
        setIsCheckedMap({
            ...isCheckedMap,
            [task]: checked,
        });
        if (checked) {
            setCompletedTaskList([...completedTaskList, task]);
        } else {
            setCompletedTaskList(completedTaskList.filter((t) => t !== task));
        }
    };

    useEffect(() => {
        const taskListStr = window.localStorage.getItem("taskList");
        const taskList = JSON.parse(taskListStr) || [];
        setTaskList(taskList);

        const savedCheckedMap = JSON.parse(localStorage.getItem('isCheckedMap')) || {};
        setIsCheckedMap(savedCheckedMap);

        const completedTaskList = taskList.filter(task => savedCheckedMap[task]);
        setCompletedTaskList(completedTaskList);
    }, []);

    useEffect(() => {
        const newCheckedMap = completedTaskList.reduce((acc, task) => {
            acc[task] = true;
            return acc;
        }, {});
        setIsCheckedMap(newCheckedMap);

        window.localStorage.setItem('isCheckedMap', JSON.stringify(newCheckedMap));
    }, [completedTaskList]);


    return (
        <Container>
            <Header onSubmit={onSubmit}/>
            {error && <div>{error}
                <button onClick={() => setError('')}>x</button>
            </div>}
            {taskList.map((task, index) => (
                <Task
                    key={index}
                    indx={index + 1}
                    uniqueId={uniqueId}
                    completed={completedTaskList.includes(task)}
                    isChecked={isCheckedMap[task]}
                    onChange={handleCompleteTask}
                    onRemove={handleRemoveTask}
                >
                    {task}
                </Task>

            ))}
            <Footer arr={taskList} countChecked={0} completedArr={completedTaskList}/>
        </Container>
    )
}
