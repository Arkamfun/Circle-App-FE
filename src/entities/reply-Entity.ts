import { ThreadEntity } from "./thread";
import { UserEntity } from "./user";


export type ReplyEntity = {
    id: number,
    content?: string,
    image?: string,
    likeCount?: number,
    repliesCount?: number,
    createdAt: Date,
    updatedAt: Date,
    timeAgo?: string,
    user: Omit<UserEntity, "password">,
    thread: ThreadEntity
    threadId: number
}

export type CreateReplyEntity = {
    id: number,
    content?: string,
    image?: FileList,
    likeCount?: number,
    repliesCount?: number,
    createdAt: Date,
    updatedAt: Date,
    thread: ThreadEntity
    threadId: number
    user: Omit<UserEntity, "password">,
}