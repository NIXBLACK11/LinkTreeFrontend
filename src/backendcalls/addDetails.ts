import axios, { AxiosError } from 'axios';
import { BACKEND_URL } from './backend_url';

export async function addDetails(userName: string, heading: string, url: string, token: string): Promise<boolean> {
    console.log("In this");
    try {
        const response = await axios.post(`${BACKEND_URL}${userName}/addDetails`, {
            name: heading,
            url: url
        }, {
            headers: {
                Authorization: token
            }
        });

        if (response.status === 200) {
            return true;
        } else {
            console.log(`Unexpected response status: ${response.status}`);
            return false;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            console.log(axiosError);
            if (axiosError.response && axiosError.response.status === 401) {
                console.log("Unauthorized");
            } else {
                console.log("An error occurred during validation");
            }
        }
        return false;
    }
}

