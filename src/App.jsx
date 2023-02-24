import Header from './components/Header'
import {useState} from "react";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Task from "./components/Task";

export function App() {
    const [taskList, setTaskList] = useState([]);
    const [completedTaskList, setCompletedTaskList] = useState([]);
    const [error, setError] = useState("")


    const addTask = (task) => {
        const newTaskList = [...taskList, task];

        window.localStorage.setItem("taskList", JSON.stringify(newTaskList));

        setTaskList(newTaskList);
    };

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
    }

    const handleCompleteTask = (task) => {
        if (completedTaskList.includes(task)) {
            setCompletedTaskList(completedTaskList.filter((t) => t !== task));
        } else {

            setCompletedTaskList([...completedTaskList, task]);
        }
    }

    const onSubmit = (task) => {
        setError("");

        if (!task) return;
        if (taskList.includes(task)) {
            setError(alert("This task is already exists!"));
            return;
        }
        addTask(task)
    };



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
                    completed={completedTaskList.includes(task)}
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
