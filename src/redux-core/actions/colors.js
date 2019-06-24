import {colors} from '../types';
import {getColors} from 'root/api'

const {
  GET_COLORS,
} = colors;

export const loadColors = (params) => ({
  type: GET_COLORS,
  payload: getColors(params),
});
