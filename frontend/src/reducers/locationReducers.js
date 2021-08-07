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

export const locationListReducer = (state = { locations: [] }, action) => {
  switch (action.type) {
    case LOCATION_LIST_REQUEST:
      return {
        loading: true,
        locations: [],
      };
    case LOCATION_LIST_SUCCESS:
      return {
        loading: false,
        locations: action.payload.locations,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case LOCATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const locationDetailsReducer = (state = { location: {} }, action) => {
  switch (action.type) {
    case LOCATION_DETAILS_REQUEST:
      return { loading: true, ...state };
    case LOCATION_DETAILS_SUCCESS:
      return { loading: false, location: action.payload };
    case LOCATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const locationDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case LOCATION_DELETE_REQUEST:
      return { loading: true, ...state };
    case LOCATION_DELETE_SUCCESS:
      return { loading: false, success: true };
    case LOCATION_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const locationCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LOCATION_CREATE_REQUEST:
      return { loading: true };
    case LOCATION_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case LOCATION_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case LOCATION_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
