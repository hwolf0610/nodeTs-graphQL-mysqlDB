import { DataSource } from "typeorm";
import { Users } from "./Entities/Users";
import { Posts } from "./Entities/Posts";
import { Comments } from "./Entities/Comments";
import { Postinfos } from "./Entities/Postinfos";
import { Commentinfos } from "./Entities/Commentinfos";

import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } from "./config";

export const AppDataSource = new DataSource({
  type: "mysql",
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: Number(DB_PORT),
  // logging: true,
  synchronize: true,
  entities: [Users, Posts, Postinfos, Comments, Commentinfos],
  ssl: true,
});
