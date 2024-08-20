import { Dispatch } from "redux";
import Config from "../../../config.json";
// export const MATCHMAKING = "MATCHMAKING";
// export const BASICKUNDLI = "BASICKUNDLI";
// export const KUNDLI = "KUNDLI";
// export const DIVISIONALCHART = "DIVISIONALCHART";
// export const DASHA = "DASHA";
// export const HORODETAIL = "HORODETAIL";

export const dealOfDayApi = () => {
    return async (dispatch: Dispatch) => {
      const resdata = await fetch(`${Config.api}product/top-performing-products?limit=4&offset=0&count=0&duration=4`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        // //   search: data,
        // }),
      });
      const resData = await resdata.json();
    //   let finalData: any = [];
    //   resData?.data?.geonames?.forEach(($: any) => {
    //     let obj = { label: "", value: {} };
    //     obj.label = `${$.place_name},${$.timezone_id}`;
    //     obj.value = { lat: $.latitude, long: $.longitude, tzone: $.timezone, place: $.place_name };
    //     finalData.push(obj);
    //   });
  
      return resData;
    };
  };
  