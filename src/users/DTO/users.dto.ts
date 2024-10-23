import { Posts } from "src/posts/posts.entity";

export class UsersDTO {

    //@inNotEmpty
    name: string

    //@inNotEmpty
    //@isEmail
    email: string
    senha: string
    isActive: boolean
    post: Posts[];
}
