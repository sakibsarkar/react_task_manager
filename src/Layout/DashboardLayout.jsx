import "./DashboardLayout.css";
import Dashbar from "../Shared/Dashbar/Dashbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="dashoboardContainer">
            <Dashbar />
            <div className="dashOutlet">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;