import { ADDDATA, ASCSORT, DECSORT } from "./actionTypes";
import { addata, ascsort, decsort } from "./actionTypes";
import { store } from "./store";
const init = {
  dataitems: [],
};
export const reducer = (state = init, action) => {
  switch (action.type) {
    case ADDDATA:
      return { ...state, dataitems: [...action.payload] };

    case ASCSORT:
      let arr1 = state.dataitems.sort(function (a, b) {
        let m = a.title;
        let j = b.title;
        if (m < j) {
          return -1;
        }
        if (m > j) {
          return 1;
        }
        return 0;
      });
      return { ...state, dataitems: arr1 };
    case DECSORT:
      let arr = state.dataitems.sort(function (a, b) {
        let m = a.title;
        let j = b.title;
        if (m < j) {
          return 1;
        }
        if (m > j) {
          return -1;
        }
        return 0;
      });
      return { ...state, dataitems: arr };
    default:
      return state;
  }
};
