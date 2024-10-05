import { SocialConnection } from "./social-connection";

export interface UserEntity {
    id:number,
    username:string,
    fullName:string,
    email:string,
    Image:string,
    biografi?:string,
    password:string,
    photoProfile: string,
    socialConnection:SocialConnection,
    role:string,
    createdAt:Date,
    updatedAt:Date,
}