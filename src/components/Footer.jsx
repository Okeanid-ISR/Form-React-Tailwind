const Footer = ({arr,countChecked}) => {
    return (
        <footer
            className="bg-white container mx-auto justify-start w-full max-w-xl space-y-4 rounded-b-lg bg-white py-2 px-2">
            <div
                className="container text-center mx-auto justify-center w-full max-w-xl rounded-lg bg-white flex items-center">
                <p className="text-gray-400 mr-1">Made</p>  <p className="text-gray-400 mr-1" id="finished">{countChecked}</p> <p
                className="text-gray-400 mr-1">out of</p> <p className="text-gray-400" id="tasks">{arr.length}</p>
            </div>
        </footer>
    )
}

export default Footer