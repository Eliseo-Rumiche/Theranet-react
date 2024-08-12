import { Outlet } from "react-router-dom";
import "../assets/style.css";
import Sidebar from "../components/sidebar";

function HomeRoot() {

    return (
        <>
            <Sidebar />

            <div className="container">
                <div className="title">
                    <h1>Theranet</h1>
                </div>

                <Outlet />
            </div>
        </>

    );
}

export default HomeRoot;