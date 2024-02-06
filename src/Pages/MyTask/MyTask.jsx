import "./MyTask.css";
import Notask from "../../Components/Notask/Notask";
import TaskCard from "../../Cards/TaskCard/TaskCard";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { VscTasklist } from "react-icons/vsc";
import { getItem } from "../../Hooks & Func/Localstorage";

const MyTask = () => {

    const [shouldOpen, setShouldOpen] = useState(0)
    const [filterStatus, setFilterStatus] = useState("all")

    const [task_data = [], setTask_data] = useState(getItem("tasks"))
    const completed = task_data?.filter(task => task.status === "completed")

    const all_Task = getItem("tasks")

    const handleFilter = (e) => {
        const value = e.target.value
        const taskData = getItem("tasks")
        setFilterStatus(value)
        if (value === "all") {
            return setTask_data(taskData)
        }

        if (value === "high") {
            const highTask = taskData?.filter(tasks => tasks.priority === "high")
            return setTask_data(highTask)
        }
        if (value === "medium") {
            const mediumTask = taskData?.filter(tasks => tasks.priority === "medium")
            return setTask_data(mediumTask)
        }
        if (value === "low") {
            const lowTask = taskData?.filter(tasks => tasks.priority === "low")
            return setTask_data(lowTask)
        }
    }

    return (
        <div className="my_task_container">
            {

                all_Task?.length < 1 ?

                    <Notask state={"task"} />
                    :
                    <>
                        <div className="task_status">
                            <h2 style={{ color: "#ff6f0d" }}><FaTasks />Total Task: {task_data?.length}</h2>

                            <h2 style={{ color: "#00c52a" }}><VscTasklist /> Completed task: {completed.length}</h2>
                        </div>


                        <div className="filter">
                            <p>Filter By:</p>

                            <select value={filterStatus} onChange={handleFilter}>
                                <option value="all">All</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>

                        </div>



                        <div className="task_boxs" key={filterStatus}>
                            {
                                task_data?.map((task, index) => <TaskCard
                                    key={index}
                                    index={index}
                                    task={task}
                                    setTask_data={setTask_data}
                                    setShouldOpen={setShouldOpen}
                                    filterStatus={filterStatus}
                                    shouldOpen={shouldOpen} />
                                )
                            }
                        </div>

                    </>
            }
        </div >
    );
};

export default MyTask;