import { ThreadEntity, ThreadEntityCreate } from "../../../entities/thread"

export type threadDTO = ThreadEntityCreate
export type CreateThreadsDTO = Pick<ThreadEntityCreate, "title" | "content" | "image"  > & {
    authorId:number,
}