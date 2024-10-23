import { Posts } from "src/posts/posts.entity";

export class UsersDTO {

    //@inNotEmpty
    name: string

    //@inNotEmpty
    //@
    email: string
    senha: string
    isActive: boolean
    post: Posts[];
}
