import "./CompletedTask.css";
import Notask from "../../Components/Notask/Notask";
import TaskCard from "../../Cards/TaskCard/TaskCard";
import { useState } from "react";
import { getItem } from "../../Hooks & Func/Localstorage";

const CompletedTask = () => {

    const [shouldOpen, setShouldOpen] = useState(0)
    const [data, setData] = useState(
        getItem("tasks")?.filter(task => task.status === "completed")
    )

    return (
        <div className="completed_task_container">
            <h1>All completed Task</h1>


            {
                data?.length < 1 ?
                    <Notask state={"completed task"} />
                    :
                    <div className="completed_task_holder">
                        {
                            data?.map((task, index) => <TaskCard
                                key={index + "i"}
                                setShouldOpen={setShouldOpen}
                                shouldOpen={shouldOpen}
                                setTask_data={setData}
                                filterStatus={"completed"}
                                index={index}
                                task={task}

                            />)
                        }
                    </div>
            }


        </div>
    );
};

export default CompletedTask;