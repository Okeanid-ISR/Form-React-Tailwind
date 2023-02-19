import Header from './components/Header'
import {useState} from "react";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Task from "./components/Task";


export function App() {
    const [taskList, setTaskList] = useState([]);


    return (
        <Container>
            <Header onSubmit={(task) => setTaskList([...taskList, task])}/>
            {taskList.map((task, index) => (
                <Task indx={index + 1}>{task}</Task>
            ))}

            <Footer arr={taskList} countChecked={0}/>
        </Container>
    )
}
