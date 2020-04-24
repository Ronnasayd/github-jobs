import { reducer } from "./duck";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import Reactotron from "../config";
import rootSaga from "./sagas";

let composer;
let sagaMiddleware;

if (process.env.NODE_ENV === "development") {
  const sagaMonitor = Reactotron?.createSagaMonitor!();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  composer = compose(
    applyMiddleware(sagaMiddleware),
    Reactotron?.createEnhancer!()
  );
} else {
  sagaMiddleware = createSagaMiddleware();
  composer = compose(applyMiddleware(sagaMiddleware));
}

export const store = createStore(reducer, composer);

sagaMiddleware.run(rootSaga);
