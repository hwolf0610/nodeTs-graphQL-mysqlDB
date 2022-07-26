import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.MYSQL_HOST || "127.0.0.1";
export const DB_NAME = process.env.MYSQL_DATABASE || "codeChallenge_DB";
export const DB_USERNAME = process.env.MYSQL_USER || "root";
export const DB_PASSWORD = process.env.MYSQL_PASS || "password";
export const DB_PORT = process.env.DB_PORT || 3306;
