import Header from './components/Header'
import {useState} from "react";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Task from "./components/Task";


export function App() {
    const [taskList, setTaskList] = useState([]);
    const [completedTaskList, setCompletedTaskList] = useState([]);

    const handleCompleteTask = (task) => {
        if (completedTaskList.includes(task)) {
            setCompletedTaskList([...completedTaskList.filter((t) => t !== task)]);
        } else {
            setCompletedTaskList([...completedTaskList, task]);
        }
    };

    return (
        <Container>
            <Header onSubmit={(task) => setTaskList([...taskList, task])}/>

            {taskList.map((task, index) => (
                <Task
                    indx={index + 1}
                    completed={completedTaskList.includes(task)}
                    onChange={handleCompleteTask}
                >
                    {task}
                </Task>
            ))}
            <Footer arr={taskList} countChecked={0} completedArr={completedTaskList}/>
        </Container>
    )
}
