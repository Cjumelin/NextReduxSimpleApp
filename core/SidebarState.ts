interface ISidebarState {
    isOpen: boolean;
}

export default class SidebarState {
    sidebarState: ISidebarState = {
        isOpen: false
    };

    public getSidebarIsOpen() {
        return this.sidebarState.isOpen
    };
};