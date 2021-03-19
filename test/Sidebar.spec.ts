import SidebarState from "../core/SidebarState";
import {findPagesDir} from "next/dist/lib/find-pages-dir";

let sidebarState: SidebarState = null;

beforeAll(() => {
    sidebarState = new SidebarState();
})

describe(
    "Open/close sidebar state",
    () => {
        it("Should initially be close", () => {
            expect(sidebarState.getSidebarIsOpen()).toBe(false)
        });
    }
)