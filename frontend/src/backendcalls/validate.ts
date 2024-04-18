import axios, { AxiosError } from 'axios';

export async function validateUser(userName: string, token: string): Promise<boolean> {
    try {
        const response = await axios.get(`http://localhost:8080/${userName}/validate`, {
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
