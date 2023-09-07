import { Credential } from "./credential";

export interface InvalidUser {
    errorMessage: string;
    credential: Credential;
}