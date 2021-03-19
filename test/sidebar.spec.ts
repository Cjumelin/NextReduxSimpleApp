import {Dispatch} from "redux";
import storeConfigurator from "../store/store";

describe(
    "Open/close sidebar state",
    () => {
        let store;
        let dispatch;
        let getState;
        beforeEach(() => {
            store = storeConfigurator();
            dispatch = store.dispatch;
            getState = store.getState;
        })

        // const getSidebarState = () => getState().;

        it("Should initially be close", () => {
            console.log(getState())
        });
    }
)
