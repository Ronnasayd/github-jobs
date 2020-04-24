import { reducer } from "./duck";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
//@ts-ignore
import Reactotron from "../config";
import rootSaga from "./sagas";

//@ts-ignore
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

let composer;

if (process.env.NODE_ENV === "development") {
  composer = compose(
    applyMiddleware(sagaMiddleware),
    //@ts-ignore
    Reactotron.createEnhancer()
  );
} else {
  composer = compose(applyMiddleware(sagaMiddleware));
}

export const store = createStore(reducer, composer);

sagaMiddleware.run(rootSaga);
