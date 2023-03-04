import { setItemStorage } from "./utils";
import {v4 as uuidv4} from 'uuid';

export function taskReducer(taskList = [], action) {
    switch (action.type) {
        case "ADD_TASK": {
            const newTaskItem = {
                id: uuidv4(),
                name: action.task,
                completed: false,
            };

            const newTaskList = [...taskList, newTaskItem];

            if (action.storageKey) {
                setItemStorage(action.storageKey, newTaskList);
            }

            return newTaskList;
        }

        case "REMOVE_TASK": {
            const newTaskList = taskList.filter((task) => task.id !== action.id);

            if (action.storageKey) {
                setItemStorage(action.storageKey, newTaskList);
            }

            return newTaskList;
        }

        case "COMPLETE_TASK": {
            const newTaskList = taskList.map((task) => {
                if (task.id === action.id) {
                    task.completed = action.value;
                }

                return task;
            });

            if (action.storageKey) {
                setItemStorage(action.storageKey, newTaskList);
            }

            return newTaskList;
        }

        default:
            return taskList;
    }
}


export function errorReducer(error, action) {
    switch (action.type) {
        case "SHOW_ERROR": {
            return action.text;
        }

        case "CLEAN_ERROR": {
            return "";
        }
    }
}