import { User } from "../interfaces/user";

export const validUser: User = {
    displayName: 'ไมตรี',
    credential: {
        login: 'maitree',
        password: '123456'
    }
};

export const invalidUser: User = {
    displayName: 'คนไม่ดี',
    credential: {
        login: 'badguy',
        password: 'no-such-a-password'
    }
};