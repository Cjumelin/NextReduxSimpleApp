import {close, open} from "./sidebarSlice"
import {dispatch, getState} from "../../../store/store"

const getSidebarState = () => getState().sidebar;

export const openSideBar = () => {
    dispatch(open())
};

export const closeSideBar = () => {
    dispatch(close())
};

export const toggleSidebar = () => {
    getSidebarState().isOpen ? closeSideBar() : openSideBar()
};