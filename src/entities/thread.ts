import { UserEntity } from "./user";

export interface ThreadEntity {
  id: number;
  title: string,
  content: string;
  image?: string;
  author: Omit<UserEntity, "password">;
  createdAt: Date;
  updatedAt: Date;
}

export interface ThreadEntityCreate {
  id: number;
  title: string,
  content: string;
  image?: FileList;
  user: Omit<UserEntity, "password">;
  createdAt: Date;
  updatedAt: Date;
}
