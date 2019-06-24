import {promise, colors} from '../types';

const {
  FULFILLED,
  PENDING,
  REJECTED,
} = promise;

const {
  GET_COLORS,
} = colors;

const initState = {
  error: null,
  fetching: false,
  data: [],
  selected: null,
};

export default function stations(state = initState, {type, payload}) {

  switch (type) {
    case GET_COLORS + FULFILLED:
      return ({
        ...state,
        error: null,
        fetching: false,
        data: payload.colors,
      });

    case GET_COLORS + PENDING:
      return ({
        ...state,
        fetching: true,
      });

    case GET_COLORS + REJECTED:
      return ({
        ...state,
        error: true,
        fetching: false,
      });
  }

  return state;
}
