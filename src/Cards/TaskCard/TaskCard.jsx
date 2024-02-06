import "./TaskCard.css";
import Swal from "sweetalert2";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { toast } from "sonner";
import { getItem } from "../../Hooks & Func/Localstorage";

const TaskCard = ({ task, setShouldOpen, shouldOpen, index, setAllTask }) => {
    const { taskName, taskDescription, taskDeadline, priority, status } = task || {}

    const isCompleted = status === "completed" ? true : false

    const handleDeleteTask = () => {


        Swal.fire({
            title: "Are you sure you want to delete the task",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {

            if (result.isConfirmed) {

                let allTask = getItem("tasks")
                allTask.splice(index, 1)

                // changing the task from the local storage
                localStorage.setItem("tasks", JSON.stringify(allTask))

                // adding the new tasks in state
                setAllTask(allTask)
                toast.success("Task Deleted Successfully")

            }

            else if (result.isDenied) {
                return
            }
        });

    }


    const handleComplete = () => {
        let allTask = getItem("tasks")

        // changing the index'th  task status
        allTask[index].status = "completed"

        //assigning the changed task in state
        setAllTask(allTask)

        // setting the new task in localstorage
        localStorage.setItem("tasks", JSON.stringify(allTask))

        toast.success("Hurra! you completed a task")
    }

    return (
        <div className="box">
            <div className="title" onClick={() => setShouldOpen(index)}
                style={priority === "high" ? { background: "#fa4040" } : priority === "medium" ? { background: "#f79648" } : { background: "#6440fa" }}

            >
                <div className="task_info">
                    <h2>{taskName}</h2>
                    <p>priority:{priority}</p>
                    <p>Status: {status}</p>
                    {
                        taskDeadline ? <p>{taskDeadline}</p> : ""
                    }
                </div>

                {shouldOpen === index ? <MdKeyboardArrowDown className="arrow" /> : <MdKeyboardArrowUp className="arrow" />}
            </div>


            <div className="task"
                style={shouldOpen === index ? { height: "fit-content" } : { height: "0px", padding: "0" }}>

                <p>{taskDescription}</p>


                <div className="actions">
                    {
                        isCompleted ? "" : <button
                            style={{ background: "#64bf4f" }}
                            onClick={handleComplete}

                        ><MdOutlineDone />Completed</button>
                    }

                    <button
                        style={{ background: "#fd3b3b" }}
                        onClick={handleDeleteTask}><FaRegTrashCan />Delete</button>

                </div>


            </div>


        </div>
    );
};

export default TaskCard;