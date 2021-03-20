import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { open, close } from './../core/uiState/sidebar/sidebarSlice'
import { sidebarSelector } from '../core/uiState/sidebar/sidebarSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function Drawer() {
    const dispatch = useDispatch()
    const sidebar: any = useSelector(sidebarSelector);

    console.log(sidebar);

    const toggleDrawer = () => {
        dispatch(sidebar.isOpen ? close() : open())
    };

    const list = <div role="presentation">Menu</div>;

    return (
        <div>
            <Button onClick={toggleDrawer}>TEST</Button>
            <SwipeableDrawer
                open={sidebar.isOpen}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
            >
                {list}
            </SwipeableDrawer>
        </div>
    );
}
