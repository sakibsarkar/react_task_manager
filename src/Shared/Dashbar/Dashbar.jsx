import "./Dashbar.css";
import { useState } from "react";
import { BiTask } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { LiaTasksSolid } from "react-icons/lia";
import { LuFileClock } from "react-icons/lu";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { MdTask } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Dashbar = () => {


    const [showMoadl, setShowModal] = useState(false)


    return (
        <>
            <div className="dashBarContainer">
                <img src="https://i.ibb.co/C6Z3sts/task-Manager-LOGO.png" alt="" className="dashLogo" />


                <div className="dashLinks">
                    <NavLink to={"/task/createTask"}><MdOutlineCreateNewFolder />Create task</NavLink>
                    <NavLink to={"/task/myTask"}><LiaTasksSolid />My Task</NavLink>
                    <NavLink to={"/task/completed"}><MdTask />Completed Task</NavLink>
                    <NavLink to={"/"}><IoIosHome />Home</NavLink>
                </div>


            </div>

            <div className="mobileDashbar">

                {
                    showMoadl ?
                        <RxCross2 onClick={() => setShowModal(!showMoadl)} /> :
                        <IoMenu onClick={() => setShowModal(!showMoadl)} />
                }


                {
                    showMoadl ?
                        <div className="dashbarModal" onClick={() => setShowModal(false)}>

                            <NavLink to={"/task/createTask"}><MdOutlineCreateNewFolder />Create task</NavLink>
                            <NavLink to={"/task/myTask"}><LiaTasksSolid />My Task</NavLink>
                            <NavLink to={"/task/completed"}><MdTask />Completed Task</NavLink>
                            <NavLink to={"/"}><IoIosHome />Home</NavLink>
                        </div>

                        : ""
                }
            </div>
        </>
    );
};

export default Dashbar;