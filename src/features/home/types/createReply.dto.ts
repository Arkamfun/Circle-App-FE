import { CreateReplyEntity, } from "../../../entities/reply-Entity";

export type ReplyDTO = CreateReplyEntity;
export type CreateReplyDTO = Pick<CreateReplyEntity, "content" | "image"> & {
    threadId: number;
}

