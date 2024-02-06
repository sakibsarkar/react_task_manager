import "./MyTask.css";
import TaskCard from "../../Cards/TaskCard/TaskCard";
import { useState } from "react";
import { getItem } from "../../Hooks & Func/Localstorage";

const MyTask = () => {

    const [shouldOpen, setShouldOpen] = useState(0)

    const allTask = getItem("tasks")


    return (
        <div className="my_task_container">
            <div className="task_boxs">
                {
                    allTask?.map((task, index) => <TaskCard
                        key={index}
                        index={index}
                        task={task}
                        setShouldOpen={setShouldOpen}
                        shouldOpen={shouldOpen} />
                    )
                }
            </div>
        </div>
    );
};

export default MyTask;