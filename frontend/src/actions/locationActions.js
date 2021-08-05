import axios from 'axios';
import {
  LOCATION_LIST_REQUEST,
  LOCATION_LIST_SUCCESS,
  LOCATION_LIST_FAIL,
} from '../constants/locationConstants';

export const listLocations =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: LOCATION_LIST_REQUEST });

      const { data } = await axios.get(
        `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: LOCATION_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOCATION_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
