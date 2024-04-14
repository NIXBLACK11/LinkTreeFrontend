import axios, { AxiosError, AxiosResponse } from "axios";
import { User } from "../interfaces/userInterface";
import { Token } from "../interfaces/tokenInterface";
import { setCookie } from "../utils/saveCookie";

export async function signupUser(userData: User): Promise<boolean> {
    try {
        const data = {
            Username: userData.userName,
            Password: userData.userPassword
        }
        
        const response: AxiosResponse<Token> = await axios.post('http://localhost:8080/signup', data);
        const token: Token = response.data;
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