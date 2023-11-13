import { Login } from "./Login.model";

export interface LoginResponse {
    response_status: boolean;
    response_code: number;
    response_message: string;
    login?: Login[];
}
