import instance from "./instance";

export const signin = (user:string) => {
    const url = "/login";
    return instance.post(url, user)
}