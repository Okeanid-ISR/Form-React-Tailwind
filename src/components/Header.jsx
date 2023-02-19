import {useState} from "react";

const Header = ({onSubmit}) => {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(taskName);
        setTaskName("");
    };

    return (
        <div className="bg-white container mx-auto justify-start w-full max-w-xl space-y-4 rounded-t-lg bg-white pb-3">

            <form onSubmit={handleSubmit}
                  className="container mx-auto justify-start w-full max-w-xl rounded-t-lg px-6 py-6 bg-blue-50">
                <div className="flex flex-row border-solid border-2 rounded-md">
                    <div className="input-main rounded-md basis-9/10 items-center">
                        <input value={taskName} onChange={(e) => {
                            setTaskName(e.target.value)

                        }} placeholder="Новая задача..."
                               className="p-2 w-full focus:outline-none rounded-l-lg input_cs"/>
                    </div>
                    <button type="submit"
                            className="header-main__svg flex basis-1/10 justify-end items-center rounded-r-lg bg-white pr-2.5">
                        <svg className="cursor-pointer bg-white" width="32" height="32" viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="6" fill="#2563EB"/>
                            <path
                                d="M16.75 10.75C16.75 10.5511 16.671 10.3603 16.5303 10.2197C16.3897 10.079 16.1989 10 16 10C15.8011 10 15.6103 10.079 15.4697 10.2197C15.329 10.3603 15.25 10.5511 15.25 10.75V15.25H10.75C10.5511 15.25 10.3603 15.329 10.2197 15.4697C10.079 15.6103 10 15.8011 10 16C10 16.1989 10.079 16.3897 10.2197 16.5303C10.3603 16.671 10.5511 16.75 10.75 16.75H15.25V21.25C15.25 21.4489 15.329 21.6397 15.4697 21.7803C15.6103 21.921 15.8011 22 16 22C16.1989 22 16.3897 21.921 16.5303 21.7803C16.671 21.6397 16.75 21.4489 16.75 21.25V16.75H21.25C21.4489 16.75 21.6397 16.671 21.7803 16.5303C21.921 16.3897 22 16.1989 22 16C22 15.8011 21.921 15.6103 21.7803 15.4697C21.6397 15.329 21.4489 15.25 21.25 15.25H16.75V10.75Z"
                                fill="white"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Header
