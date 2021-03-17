import { FINISHED_TASK, MORE_TASK, REMOVE_TASK, REVISE_TASK } from "../const/actionType"

const initialState = {
  tabTasks: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MORE_TASK:
      return { ...state, tabTasks: [...state.tabTasks, payload] };
    case REVISE_TASK:
      return {
        ...state,
        tabTasks: state.tabTasks.map((el) =>
          el.id === payload.id ? { ...el, task: payload.revisedOne } : el
        ),
      };
    case REMOVE_TASK:
      return {
        ...state,
        tabTasks: state.tabTasks.filter((el) => el.id !== payload),
      };
    case FINISHED_TASK:
      return {
        ...state,
        tabTasks: [
          ...state.tabTasks.map(
            (el) => (el.id = payload ? { ...el, isDone: !el.isDone } : el)
          ),
        ],
      };

    default:
      return state;
  }
};
