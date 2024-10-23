//BAIXAR DEPENDENCIA DE VALIDAÇÃO
import { Posts } from "src/posts/posts.entity";

export class UsersDTO {

    //@inNotEmpty
    name: string

    //@inNotEmpty
    //@isEmail
    email: string
     
    //@inNotEmpty
    senha: string

    //@inNotEmpty
    //@inBoolean
    isActive: boolean

    //@inNotEmpty
    post: Posts[];
}
