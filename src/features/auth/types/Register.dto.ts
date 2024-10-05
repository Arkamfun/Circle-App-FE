import { UserEntity } from "../../../entities/user";
import { LoginResponseDTO } from "./login.dto";

export type RegisterRequestDTO = Pick<
    UserEntity,

    "username"|"fullName" | "email" | "password"
    >;

    export type RegisterResponseDTO = LoginResponseDTO