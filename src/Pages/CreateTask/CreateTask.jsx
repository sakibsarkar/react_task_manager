import "./CreateTask.css";
import { useState } from "react";
import { toast } from "sonner";
import { addItem } from "../../Hooks & Func/Localstorage";

const CreateTask = () => {

    const [priority, setPriority] = useState("low")

    const handleAddTask = (e) => {
        e.preventDefault()
        if (!priority) {
            return;
        }

        const form = e.target
        const taskName = form.name.value
        const taskDescription = form.description.value
        const taskDeadline = form.deadline.value || ""

        const taskObj = {
            taskName,
            taskDescription,
            taskDeadline,
            priority,
            status: "not completed"
        }

        addItem("tasks", taskObj)
        toast.success("Task Added Successfully")
        form.reset()
    }


    return (
        <div className="create_task_container">
            <form onSubmit={handleAddTask}>
                <div>
                    <p>Task Title</p>
                    <input type="text" name="name" required />
                </div>

                <div className="row">
                    <div>
                        <p>Task priority</p>
                        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div>
                        <p>Task Deadline (optional)</p>
                        <input type="date" name="deadline" />
                    </div>
                </div>

                <div>
                    <p>Task Description</p>
                    <textarea name="description" required />
                </div>
                <button>Add new Task</button>
            </form>

        </div>
    );
};

export default CreateTask;