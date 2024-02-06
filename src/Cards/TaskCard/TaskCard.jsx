import "./TaskCard.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TaskCard = ({ task, setShouldOpen, shouldOpen, index }) => {
    const { taskName, taskDescription, taskDeadline, priority } = task || {}
    return (
        <div className="box">
            <div className="title" onClick={() => setShouldOpen(index)}
                style={priority === "high" ? { background: "#fa4040" } : priority === "medium" ? { background: "#f79648" } : { background: "#6440fa" }}

            >


                <div className="task_info">
                    <h2>{taskName}</h2>
                    <p>priority:{priority}</p>
                    {
                        taskDeadline ? <p>{taskDeadline}</p> : ""
                    }
                </div>

                {shouldOpen === index ? <MdKeyboardArrowDown className="arrow" /> : <MdKeyboardArrowUp className="arrow" />}
            </div>


            <div className="task" style={shouldOpen === index ? { height: "fit-content" } : { height: "0px", padding: "0" }}>
                <p>{taskDescription}</p>
            </div>


        </div>
    );
};

export default TaskCard;