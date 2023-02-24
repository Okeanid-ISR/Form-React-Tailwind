export const Task = ({indx, children,isChecked, completed, onChange, onRemove}) => {

    return (
        <div
            className="container mx-auto justify-start w-full max-w-xl  bg-white px-6 py-2">
            <div
                className="container border rounded-md p-4 mx-auto flex flex-row justify-between items-center justify w-full max-w-xl">
                <div className="flex space-x-2">
                    <label>
                        <input type="checkbox" checked={isChecked} onChange={(event) => onChange(event, children)} className="px-3 py-3 cursor-pointer hover:scroll-p-2"/>
                    </label>
                    <h3  style={{ color: completed ? 'black' : '#A1A1AA' }} className="text-gray-400 textName">{indx}. {children}</h3>
                </div>
                 <button onClick={() => onRemove(children)} className="x-btn delete-button">
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.28003 0.219999C2.13786 0.0875188 1.94981 0.0153959 1.75551 0.0188241C1.56121 0.0222523 1.37582 0.100964 1.23841 0.238377C1.101 0.37579 1.02228 0.561175 1.01886 0.755476C1.01543 0.949778 1.08755 1.13782 1.22003 1.28L4.94003 5L1.22003 8.72C1.14634 8.78866 1.08724 8.87146 1.04625 8.96346C1.00526 9.05546 0.983217 9.15477 0.98144 9.25548C0.979663 9.35618 0.998188 9.45621 1.03591 9.5496C1.07363 9.64299 1.12977 9.72782 1.20099 9.79904C1.27221 9.87026 1.35705 9.9264 1.45043 9.96412C1.54382 10.0018 1.64385 10.0204 1.74455 10.0186C1.84526 10.0168 1.94457 9.99477 2.03657 9.95378C2.12857 9.91279 2.21137 9.85369 2.28003 9.78L6.00003 6.06L9.72003 9.78C9.78869 9.85369 9.87149 9.91279 9.96349 9.95378C10.0555 9.99477 10.1548 10.0168 10.2555 10.0186C10.3562 10.0204 10.4562 10.0018 10.5496 9.96412C10.643 9.9264 10.7279 9.87026 10.7991 9.79904C10.8703 9.72782 10.9264 9.64299 10.9642 9.5496C11.0019 9.45621 11.0204 9.35618 11.0186 9.25548C11.0168 9.15477 10.9948 9.05546 10.9538 8.96346C10.9128 8.87146 10.8537 8.78866 10.78 8.72L7.06003 5L10.78 1.28C10.9125 1.13782 10.9846 0.949778 10.9812 0.755476C10.9778 0.561175 10.8991 0.37579 10.7617 0.238377C10.6242 0.100964 10.4389 0.0222523 10.2446 0.0188241C10.0503 0.0153959 9.86221 0.0875188 9.72003 0.219999L6.00003 3.94L2.28003 0.219999Z"
                            fill="black"/>
                    </svg>
                </button>
            </div>
        </div>

    );
};

export default Task;