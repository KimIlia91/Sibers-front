import { IAuthResponse } from "@/models/IAuthResponse";

export const addLocalstorage = (data: IAuthResponse) => {
  localStorage.setItem('currentUser',JSON.stringify(data))
};

