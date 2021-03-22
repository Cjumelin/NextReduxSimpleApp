import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { open, close } from './../core/uiState/sidebar/sidebarSlice'
import { sidebarSelector } from '../core/uiState/sidebar/sidebarSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function Sidebar() {
    const dispatch = useDispatch()
    const sidebar: any = useSelector(sidebarSelector);

    const openSideBar = () => {
        dispatch(open())
    }

    const closeSideBar = () => {
        dispatch(close())
    }

    const toggleDrawer = () => {
        sidebar.isOpen ? closeSideBar() : openSideBar()
    };

    const list = <div role="presentation">Menu</div>;

    return (
        <React.Fragment>
            <Button onClick={toggleDrawer}>Sidebar</Button>
            <div
                className={(sidebar.isOpen ? "openedSidebar": "closedSidebar") + " sidebar bg-gray-400 fixed z-10"}
                onMouseEnter={openSideBar}
                onMouseLeave={closeSideBar}
            >
                {list}
            </div>
        </React.Fragment>
    );
}
