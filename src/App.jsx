import Header from './components/Header'
import {useState} from "react";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Main from "./components/Main";


export function App() {
    const [taskList, setTaskList] = useState([]);

    return (
        <Container>
            <Header onSubmit={(task) => setTaskList([...taskList, task])}/>
            {JSON.stringify(taskList)}
            <Main/>
            <Footer/>
        </Container>
    )
}
