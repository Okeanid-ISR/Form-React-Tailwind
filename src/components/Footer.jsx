const Footer = () => {
    return (
        <footer
            className="bg-white container mx-auto justify-start w-full max-w-xl space-y-4 rounded-lg bg-white py-2 px-2">
            <div
                className="container text-center mx-auto justify-center w-full max-w-xl rounded-lg bg-white flex items-center">
                <p className="text-gray-400 mr-1">Сделано</p>  <p className="text-gray-400 mr-1" id="finished"></p> <p
                className="text-gray-400 mr-1">из</p> <p className="text-gray-400" id="tasks"></p>
            </div>
        </footer>
    )
}

export default Footer