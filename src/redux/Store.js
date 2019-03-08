import { combineReducers, createStore } from "redux";
import readMoreReducer from "./reducers/NewsReadMoreReducer";
import passAllPostsReducer from "./reducers/PassAllPostsReducer";
import tabBarReducer from "./reducers/TabBarReducer";

const allReducers = combineReducers({
    tabBar: tabBarReducer,
    readMore: readMoreReducer,
    allPostsData: passAllPostsReducer
});

const store = createStore(
    allReducers,
    window.devToolsExtension && window.devToolsExtension()
);

export { store };
