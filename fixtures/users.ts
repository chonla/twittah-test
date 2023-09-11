import { InvalidUser } from "../interfaces/invalid-user";
import { User } from "../interfaces/user";

export const validUsers: User = {
    displayName: 'ไมตรี',
    credential: {
        login: 'maitree',
        password: '123456'
    }
};

export const invalidUsers: InvalidUser[] = [
    {
        errorMessage: 'ล็อกอินหรือรหัสผ่านไม่ถูกต้อง',
        credential: {
            login: 'badguy',
            password: 'no-such-a-password'
        }
    },
    {
        errorMessage: 'ล็อกอินถูกระงับ',
        credential: {
            login: 'jomyut',
            password: '123456'
        }
    }
];