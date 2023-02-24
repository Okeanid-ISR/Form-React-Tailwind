import Header from './components/Header'
import {useState} from "react";
import {useEffect} from "react";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Task from "./components/Task";

export function App() {
    const [taskList, setTaskList] = useState([]);
    const [completedTaskList, setCompletedTaskList] = useState([]);
    const [error, setError] = useState("")
    const [isChecked, setIsChecked] = useState();

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

    const addTask = (task) => {
        const newTaskList = [...taskList, task];

        window.localStorage.setItem("taskList", JSON.stringify(newTaskList));

        setTaskList(newTaskList);
    };

    const handleCompleteTask = (event, task) => {
        let taskId = task.replace(/\s+/g, '-').toLowerCase();
        setIsChecked(event.target.checked);
        if (completedTaskList.includes(task)) {
            setCompletedTaskList(completedTaskList.filter((t) => t !== task));
            localStorage.removeItem(taskId);
        } else {
            setCompletedTaskList([...completedTaskList, task]);
            localStorage.setItem(taskId, 'completed');
        }
    };

    const onSubmit = (task) => {
        setError("");

        if (!task) return;
        if (taskList.includes(task)) {
          alert("This task is already exists!");
            return;
        }
        addTask(task)
    };

    useEffect(() => {
        const taskListStr = window.localStorage.getItem("taskList");
        const taskList = JSON.parse(taskListStr);

        setTaskList(taskList);
    }, []);

    useEffect(() => {
        localStorage.setItem('isChecked', isChecked);
    }, [isChecked]);


    useEffect(() => {
        const initialCheckedState = localStorage.getItem('isChecked') === 'true';
        setIsChecked(initialCheckedState);
    }, []);



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
                    isChecked={isChecked}
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
