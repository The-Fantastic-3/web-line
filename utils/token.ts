var jwt = require("jsonwebtoken");

const getDecodedToken = () => {
  if (typeof window === "undefined") return null;
  const token = localStorage.getItem("access_token");
  return token ? jwt.decode(token) : null;
};

export const getName = () => getDecodedToken()?.name || null;
export const getRole = () => getDecodedToken()?.role || null;
export const getShopId = () => getDecodedToken()?.shopId || null;
export const getShopName = () => getDecodedToken()?.shopName || null;
export const getUserId = () => getDecodedToken()?.sub || null;
