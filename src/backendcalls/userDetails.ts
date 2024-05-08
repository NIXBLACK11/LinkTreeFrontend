import axios, { AxiosError, AxiosResponse } from "axios";

import { BACKEND_URL } from './backend_url';
import { Link } from "../interfaces/linksInterface";

export interface UserDetailsResult {
    success: boolean;
    data?: Link[];
    error?: string;
}

export async function userDetails(userName: string): Promise<UserDetailsResult> {
    try {
        const response: AxiosResponse<Link[]> = await axios.get(`${BACKEND_URL}${userName}`);

        if (response.status === 200) {
            const links: Link[] = response.data;
            return { success: true, data: links };
        } else {
            console.log(`Unexpected response status: ${response.status}`);
            return { success: false, error: `Unexpected response status: ${response.status}` };
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            console.log(axiosError);
            if (axiosError.response && axiosError.response.status === 401) {
                console.log("Unauthorized");
                return { success: false, error: "Unauthorized" };
            } else {
                console.log("An error occurred during the request");
                return { success: false, error: "An error occurred during the request" };
            }
        }
        return { success: false, error: "Unknown error" };
    }
}
