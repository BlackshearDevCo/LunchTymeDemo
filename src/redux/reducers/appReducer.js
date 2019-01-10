
const initialState = {
  showDetail: false,
};

const TOGGLE_DETAIL = "TOGGLE_DETAIL";

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DETAIL:
      return { ...state, showDetail: !state.showDetail };
    default:
      return { ...state };
  }
};

export const toggleDetail = () => ({ type: TOGGLE_DETAIL });
