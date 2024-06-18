export interface IData {
    message?: string,
    status?: string,
    statusCode?: any
    token?: string
}

export interface ISignInInitialState{
    loading : boolean,
    data: IData,
    error : string
}

export interface ISignInPayload {
    email: string,
    password: string
}

export interface ISignUpPayload {
    contactNumber: string
    email: string
    password: string
    username: string
}

export interface ISignUpInitialState{
    loading : boolean,
    data: any,
    error : string
}
