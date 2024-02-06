import "./TaskCard.css";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";
import { getItem } from "../../Hooks & Func/Localstorage";

const TaskCard = ({ task, setShouldOpen, shouldOpen, index, setTask_data, filterStatus }) => {
    const { taskName, taskDescription, taskDeadline, priority, status } = task || {}

    const isCompleted = status === "completed" ? true : false


    // to get the new edited  prority 
    const [selectedPriority, setSelectedPirity] = useState(priority)

    // show the task edit form
    const [showForm, setShowForm] = useState(false)

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
                setTask_data(allTask)
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
        setTask_data(allTask)

        // setting the new task in localstorage
        localStorage.setItem("tasks", JSON.stringify(allTask))

        toast.success("Hurra! you completed a task")
    }



    const handleEditTask = (e) => {

        e.preventDefault()
        let allTask = getItem("tasks")

        // edited values
        const form = e.target
        const new_taskName = form.name.value
        const new_taskDescription = form.description.value
        const new_taskDeadline = form.deadline.value || ""

        // updating the values of the task 
        allTask[index].taskName = new_taskName
        allTask[index].taskDescription = new_taskDescription
        allTask[index].taskDeadline = new_taskDeadline
        allTask[index].priority = selectedPriority


        // changing stats and localstorage
        setTask_data(allTask)
        localStorage.setItem("tasks", JSON.stringify(allTask))
        toast.success("task updated")
        setShowForm(false)

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
                        !isCompleted && filterStatus === "all" ? <>
                            <button
                                style={{ background: "#64bf4f" }}
                                onClick={handleComplete}

                            ><MdOutlineDone />Completed</button>

                            <button
                                style={{ background: "#3b7efd" }}
                                onClick={() => setShowForm(true)}><FaRegTrashCan />Edit</button>
                        </> : ""
                    }

                    {
                        filterStatus === "all" ?
                            <button
                                style={{ background: "#fd3b3b" }}
                                onClick={handleDeleteTask}><FaRegTrashCan />Delete</button> : ""
                    }


                </div>


            </div>




            {/* task edit form */}
            {
                showForm ?
                    <div className="editForm">

                        <form onSubmit={handleEditTask}>
                            <div className="cross" onClick={() => setShowForm(false)}>
                                <RxCross2 />
                            </div>
                            <div>
                                <p>Task Title</p>
                                <input type="text" name="name" required defaultValue={taskName} />
                            </div>

                            <div className="row">
                                <div>
                                    <p>Task priority</p>
                                    <select onChange={(e) => setSelectedPirity(e.target.value)} value={selectedPriority}>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>

                                <div>
                                    <p>Task Deadline (optional)</p>
                                    <input type="date" name="deadline" defaultValue={taskDeadline} />
                                </div>
                            </div>

                            <div>
                                <p>Task Description</p>
                                <textarea name="description" required defaultValue={taskDescription} />
                            </div>
                            <button>Add new Task</button>
                        </form>

                    </div>

                    :
                    ""
            }


        </div>
    );
};

export default TaskCard;