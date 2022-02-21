import { ADDDATA, ASCSORT, DECSORT } from "./actionTypes";
export const adddata = (data) => {
  return { type: ADDDATA, payload: data };
};

export const ascsort = (data) => {
  return { type: ASCSORT, payload: data };
};
export const decsort = (data) => {
  return { type: DECSORT, payload: data };
};
