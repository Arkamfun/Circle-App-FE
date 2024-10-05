import { ThreadEntity } from "../../../entities/thread"

export type threadDTO = ThreadEntity
export type CreateThreadsDTO = Pick<ThreadEntity, "title" | "content" | "image" > & {
    authorId:number
}