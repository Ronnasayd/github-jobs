import { createActions, createReducer } from "reduxsauce";
import { produce } from "immer";
import { AddAction, IState } from "../interfaces";

export const INITIAL_STATE = {
  jobs: [],
};

export const { Types, Creators } = createActions({
  addJobs: ["jobs"],
});

const addJobs = (state = INITIAL_STATE, action: AddAction) => {
  const nextState = produce(state, (draftState: IState) => {
    draftState.jobs = action.jobs;
  });
  return nextState;
};

const HANDLERS = {
  [Types.ADD_JOBS as string]: addJobs,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
