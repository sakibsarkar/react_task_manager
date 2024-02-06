import "./MyTask.css";
import Notask from "../../Components/Notask/Notask";
import TaskCard from "../../Cards/TaskCard/TaskCard";
import { useState } from "react";
import { getItem } from "../../Hooks & Func/Localstorage";

const MyTask = () => {

    const [shouldOpen, setShouldOpen] = useState(0)

    const [allTask, setAllTask] = useState(getItem("tasks"))


    return (
        <div className="my_task_container">
            {

                allTask?.length < 1 ?

                    <Notask state={"task"} />
                    :

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


            }
        </div >
    );
};

export default MyTask;