import axios, { AxiosError } from 'axios';

export async function deleteLink(userName: string, token: string, website: string): Promise<boolean> {
    try {
        const response = await axios.post(`http://localhost:8080/${userName}/removeDetails`, {
            name: website
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
