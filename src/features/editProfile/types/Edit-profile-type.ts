import { UserEntity } from "../../../entities/user";

export type EditProfileInputs = Pick<UserEntity, "fullName" | "username" | "biografi">

export type EditProfileResponse = Pick<UserEntity, "fullName" | "username" | "biografi" | "id">


