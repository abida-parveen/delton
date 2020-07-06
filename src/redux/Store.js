import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import { persistStore } from "redux-persist";


const middlewares = [logger]
const Store = createStore(RootReducer, applyMiddleware(...middlewares))

export const Persistor = persistStore(Store)

export default Store;