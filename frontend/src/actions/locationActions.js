import axios from 'axios';
import {
  LOCATION_LIST_REQUEST,
  LOCATION_LIST_SUCCESS,
  LOCATION_LIST_FAIL,
  LOCATION_DETAILS_REQUEST,
  LOCATION_DETAILS_SUCCESS,
  LOCATION_DETAILS_FAIL,
  LOCATION_DELETE_FAIL,
  LOCATION_DELETE_SUCCESS,
  LOCATION_DELETE_REQUEST,
  LOCATION_CREATE_REQUEST,
  LOCATION_CREATE_SUCCESS,
  LOCATION_CREATE_FAIL,
} from '../constants/locationConstants';

export const listLocations =
  // (keyword = '', pageNumber = '')
  () => async (dispatch) => {
    try {
      dispatch({ type: LOCATION_LIST_REQUEST });

      const { data } = await axios.get(
        // `/api/locations?keyword=${keyword}&pageNumber=${pageNumber}`
        `/api/locations`
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

export const listLocationDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOCATION_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/locations/${id}`);

    dispatch({
      type: LOCATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOCATION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteLocation = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOCATION_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/locations/${id}`, config);

    dispatch({
      type: LOCATION_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not Authorized, token failed') {
    }
    dispatch({
      type: LOCATION_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createLocation = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOCATION_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/locations`, {}, config);

    dispatch({
      type: LOCATION_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not Authorized, token failed') {
    }
    dispatch({
      type: LOCATION_CREATE_FAIL,
      payload: message,
    });
  }
};
