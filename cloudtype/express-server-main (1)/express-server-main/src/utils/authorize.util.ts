import jwt from "jsonwebtoken";

const configuredSecret = process.env.JWT_SECRET;
if (!configuredSecret) {
  throw new Error("Set JWT_SECRET in the server environment");
}
export const JWT_SECRET: string = configuredSecret;

export const createToken = (value: string) => {
  return jwt.sign(value, JWT_SECRET);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};

export const parseToken = (token: string) => {
  return token.includes("Bearer") ? token.split(" ")[1] : token;
};
