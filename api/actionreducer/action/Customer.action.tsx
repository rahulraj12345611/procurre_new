import { Dispatch } from 'redux';
import Config from "../../../config.json";
export const DIVISION = "DIVISION";

export const UserWalletData = (data: any, token: any) => {
  return async (dispatch: Dispatch) => {
    const resdata = await fetch(`${Config.api}/customer/customer_wallet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `
      },
      body: JSON.stringify(data),
    });
    const resData = await resdata.json();
    return resData;
  };
};
