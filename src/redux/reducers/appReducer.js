
const initialState = {
  showDetail: false,
  currentPage: 'lunch',
  currentRestaurant: null,
};

const TOGGLE_DETAIL = "TOGGLE_DETAIL";
const CHANGE_ROUTE = "CHANGE_ROUTE";
const CHANGE_RESTAURANT = "CHANGE_RESTAURANT";

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DETAIL:
      return { ...state, showDetail: !state.showDetail };

    case CHANGE_ROUTE:
      return { ...state, currentPage: action.payload, showDetail: false };

    case CHANGE_RESTAURANT:
      return { ...state, currentRestaurant: action.payload }

    default:
      return { ...state };
  }
};

export const toggleDetail = () => ({ type: TOGGLE_DETAIL });

export const changeRoute = page => ({
  type: CHANGE_ROUTE,
  payload: page,
});

export const changeRestaurant = restaurant => ({
  type: CHANGE_RESTAURANT,
  payload: restaurant,
});
