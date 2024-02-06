import "./MyTask.css";
import Notask from "../../Components/Notask/Notask";
import TaskCard from "../../Cards/TaskCard/TaskCard";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { VscTasklist } from "react-icons/vsc";
import { getItem } from "../../Hooks & Func/Localstorage";

const MyTask = () => {

    const [shouldOpen, setShouldOpen] = useState(0)

    const [allTask = [], setAllTask] = useState(getItem("tasks"))
    const completed = allTask?.filter(task => task.status === "completed")

    return (
        <div className="my_task_container">
            {

                allTask?.length < 1 ?

                    <Notask state={"task"} />
                    :
                    <>
                        <div className="task_status">
                            <h2 style={{ color: "#ff6f0d" }}><FaTasks />Total Task: {allTask?.length}</h2>

                            <h2 style={{ color: "#00c52a" }}><VscTasklist /> Completed task: {completed.length}</h2>
                        </div>



                        <div className="task_boxs">
                            {
                                allTask?.map((task, index) => <TaskCard
                                    key={index}
                                    index={index}
                                    task={task}
                                    setAllTask={setAllTask}
                                    setShouldOpen={setShouldOpen}
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