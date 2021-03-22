import storeConfigurator from "../store/store";
import {close, open} from "../core/ui/sidebar/sidebarSlice"
import {Store} from "redux";

describe(
    "Open/close sidebar state",
    () => {
        let store:Store<any>;
        let dispatch;
        
        beforeEach(() => {
            store = storeConfigurator();
            dispatch = store.dispatch;
        })

        const getSidebarState = () => store.getState().sidebar;

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

        const listenToChangedState = (expectedState: any, done: () => void, actionPosition: number) => {
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
