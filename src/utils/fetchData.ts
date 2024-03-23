import { ILogin } from "@/models/ILogin";
import { ISignup } from "@/models/ISignup";

const baseUrl = "https://0rk00cd8-7174.inc1.devtunnels.ms/";

export const createUser = async (data: ISignup) => {
  const res = await fetch(baseUrl + "api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res;
};
export const loginUser = async (data: ILogin) => {
  const res = await fetch(baseUrl + "api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res;
};
