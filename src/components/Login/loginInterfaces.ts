export interface ILoginProps {
    setToken(userToken: string): void
}
export interface ITokenAxiosReponse {
    token: string
}

export interface ICredentialsObj {
    values: ICreadentials
}

export interface ICreadentials {
    login: string,
    password: string,
    showPassword: boolean
}

export interface LoginAndPassword {
    login?: string,
    password?: string,
}