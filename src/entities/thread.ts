import { UserEntity } from "./user";

export interface ThreadEntity {
  id: number;
  title:string,
  content: string;
  image?: string;
  user: Omit<UserEntity, "password">;
  createdAt: Date;
  updatedAt: Date;
}