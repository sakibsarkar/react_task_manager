import "./Navbar.css";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [showMobileNav, setShowMobileNav] = useState(false)

    return (
        <nav>
            <div className="navWrapper">
                <div className="logo">
                    <img src="https://i.ibb.co/C6Z3sts/task-Manager-LOGO.png" alt="" />
                </div>

                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/task/myTask"}>My Task</NavLink></li>
                </ul>

            </div>

            <div className="mobileNav">
                <IoMenu className={"menuIcon"} onClick={() => setShowMobileNav(!showMobileNav)} />

                {
                    showMobileNav ?
                        <div className="navModal">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/task/myTask"}>My ask</NavLink>
                        </div>

                        : ""
                }
            </div>
        </nav>
    );
};

export default Navbar;