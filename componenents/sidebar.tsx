import React from "react";
import { sidebarSelector } from '../core/uiState/sidebar/sidebarSlice'
import { useSelector } from 'react-redux'
import {openSideBar, closeSideBar} from "../core/uiState/sidebar/sidebar"
import NavigationBtn from "./navigationBtn";

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
