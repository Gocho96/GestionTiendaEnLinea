export interface userAuth{
    id?: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    username?: string;
    email: string;
    password: string;
    token?:string;
}