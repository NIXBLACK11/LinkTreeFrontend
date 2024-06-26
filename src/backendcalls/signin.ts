import axios, { AxiosResponse, AxiosError } from 'axios';

import { BACKEND_URL } from './backend_url';
import { setCookie } from "../utils/saveCookie";
import { User } from "../interfaces/userInterface";
import { Token } from '../interfaces/tokenInterface';

export async function signinUser(userData: User): Promise<boolean> {
    try {
        const data = {
            Username: userData.userName,
            Password: userData.userPassword
        }
        
        const response: AxiosResponse<Token> = await axios.post(`${BACKEND_URL}login`, data);
        const token: Token = response.data;
        console.log(token);
        setCookie("jwtToken", token.token);
        console.log(token.token);
        return true; // Signin successful
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            console.log(axiosError);
            // Check response status here
            if (axiosError.response && axiosError.response.status === 401) {
                console.log("Unauthorized - Username or password incorrect");
            } else {
                console.log("An error occurred during signin");
            }
        }
        return false; // Signin failed
    }
}