import { UserEntity } from "../../../entities/user";

  export interface ForgotEmailForm   {
    email:string,
  }

  export type RegisterRequestDTO = Pick<
  UserEntity,
  "fullName" | "email" | "password"
>;  //yang ditulis yang diambil




export type UserStoreDTO = Omit<UserEntity, "password">; //omit itu yang ditulis gak mau diambil