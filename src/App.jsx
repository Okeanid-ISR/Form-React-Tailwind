import Header from './components/Header'
import {useState} from "react";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Task from "./components/Task";
import Main from "./components/Main";


export function App() {
    const [taskList, setTaskList] = useState([]);

    return (
        <Container>
            <Header onSubmit={(task) => setTaskList([...taskList, task])}/>
            {taskList.map((task, index) => (
                <Task indx={index + 1}>{task}</Task>
            ))}
            <Footer/>
        </Container>
    )
}
