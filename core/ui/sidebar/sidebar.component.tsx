import React from "react";
import { sidebarSelector } from './sidebarSlice'
import { useSelector } from 'react-redux'
import {openSideBar, closeSideBar} from "./sidebar"
import NavigationBtn from "../../../components/navigationBtn";

export default function Sidebar() {
    const sidebar: any = useSelector(sidebarSelector);

    return (
        <React.Fragment>
            <div
                className={(sidebar.isOpen ? "openedSidebar": "closedSidebar") + " sidebar bg-gray-400 fixed z-10"}
                onMouseEnter={openSideBar}
                onMouseLeave={closeSideBar}
            >
                <div>Menu</div>
                <NavigationBtn />
            </div>
        </React.Fragment>
    );
}
