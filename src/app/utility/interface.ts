export interface IUser {
    accounts: IAccount[],
    profile: IUserProfile
}

export interface IAccount {
    name: string,
    lan: string,
    id: number,
}

export interface IUserProfile {
    name: string,
    email: string,
    nickName?: string
}
