import axios from 'axios';

const initialState = [];

const GET_RESTAURANTS = "GET_RESTAURANTS";

export default function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_RESTAURANTS}_FULFILLED`:
      return [...action.payload.data.restaurants];
    default:
      return [];
  }
};

export const getRestaurants = () => ({
  type: GET_RESTAURANTS,
  payload: axios.get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
});
