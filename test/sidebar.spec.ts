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
            listenToChangedState({isOpen: true}, done, 1);
            store.dispatch(open());
        });

        it("Can close the navbar", (done) => {
            listenToChangedState({isOpen: false}, done, 2);
            store.dispatch(open());
            store.dispatch(close());
        });

        const listenToChangedState = (expectedState, done: () => void, actionPosition: number) => {
            let counter = 1;
            store.subscribe(() => {
                if (counter === actionPosition) {
                    expect(getSidebarState()).toEqual(expectedState)
                    done();
                }
                counter++;
            });
        };
    }
)
