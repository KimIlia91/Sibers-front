export interface IAuthResponse {
  email: "string";
  accessToken: "string";
  refreshToken: "string";
  expires: Date;
  // role: string;
}
