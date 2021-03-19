import storeConfigurator from "../store/store";
import {close, open} from "../core/uiState/sidebar/sidebarSlice"

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

        const getSidebarState = () => getState().sidebar;

        it("Should initially be close", () => {
            expect(getSidebarState()).toEqual({isOpen: false})
        });

        it("Can open the navbar", (done) => {
            // expect(getSidebarState()).toEqual({isOpen: true})
            store.subscribe(() => {
                expect(store.getState().sidebar).toEqual({isOpen: true})
                done();
            })
            console.log(open());
            store.dispatch(open());
        });

        // const listenToChangedState = (expectedState, done: () => void, actionPosition: number) => {
        //     let counter = 1;
        //     store.subscribe(() => {
        //         console.log()
        //         if (counter === actionPosition) {
        //             expect(getSidebarState()).toEqual(expectedState)
        //             done();
        //         }
        //         counter++;
        //     });
        // };
    }
)
