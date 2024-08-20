// import { HORODETAIL, BASICKUNDLI, DASHA, DIVISIONALCHART, KUNDLI, MATCHMAKING } from "../action/common.action";

const initialState = {
  matchMaking: "",
  kundli: "",
  basicKundli: "",
  divisonalChart: "",
  dasha: "",
};

const CommonReducer = (state = initialState, action: any) => {
  // switch (action.type) {
  //   case MATCHMAKING:
  //     return {
  //       ...state,
  //       matchMaking: action.data,
  //     };
  //   case BASICKUNDLI:
  //     return {
  //       ...state,
  //       basicKundli: action.data,
  //     };
  //   case KUNDLI:
  //     return {
  //       ...state,
  //       kundli: action.data,
  //     };
  //   case DIVISIONALCHART:
  //     return {
  //       ...state,
  //       divisonalChart: action.data,
  //     };
  //   case DASHA:
  //     return {
  //       ...state,
  //       dasha: action.data,
  //     };
  //   case HORODETAIL:
  //     return {
  //       ...state,
  //       horoDetail: action.data,
  //     };
  // }
  return state;
};

export default CommonReducer;
