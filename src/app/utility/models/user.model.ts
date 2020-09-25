import { IUser, IAccount, IUserProfile } from '../interface';
import * as fb from 'firebase/app';
import { ELanguage } from '../enums/user.enum';

export class User implements IUser {

    constructor(
        public profile: any,
        public uid: string,
        public accounts: IAccount[] = []
    ) {
        if (accounts.length === 0) {
            this.initalUserDefaultInfo();
        }
    }

    private initalUserDefaultInfo() {
        this.profile.nickName = 'test';
        this.createDefaultAccounts(3);
    }

    private createDefaultAccounts(number: number) {
        for (let i = 1; i <= number; i++) {
            this.accounts.push(new Account(i, i.toString()))
        }
    }
}

export class Account implements IAccount {
    constructor(
        public id: number,
        public name: string,
        public lan: ELanguage = ELanguage.Chinese_Hant,
    ) {

    }
}