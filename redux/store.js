import { compose, applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import ReduxThunk from "redux-thunk";

// CREATING INITIAL STORE
export default function store(initialState) {
    const composeEnhancers =
        typeof window === "object" &&
        process.env.NODE_ENV === "development" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
              })
            : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(ReduxThunk)
        // other store enhancers if any
    );

    const store = createStore(reducer, initialState, enhancer);

    // IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE
    if (module.hot) {
        module.hot.accept("./reducers", () => {
            const createNextReducer = require("./reducers").default;

            store.replaceReducer(createNextReducer(initialState));
        });
    }

    return store;
}
