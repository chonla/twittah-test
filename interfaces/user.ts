import { Credential } from "./credential";

export interface User {
    displayName: string;
    credential: Credential;
}