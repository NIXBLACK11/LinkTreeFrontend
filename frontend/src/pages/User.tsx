import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../utils/saveCookie";
import { validateUser } from "../backendcalls/validate";
import { Link } from "../interfaces/linksInterface";
import { userDetails, UserDetailsResult } from "../backendcalls/userDetails";
import { Alert, AlertProps } from '../components/Alert';

export const User = () => {
    const { userName } = useParams<{ userName: string }>();
    const [alert, setAlert] = useState<AlertProps | null>(null);
    const token = getCookie("jwtToken");
    const [links, setLinks] = useState<Link[]>([]); // Initialize with an empty array
    console.log(userName);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (!userName) {
                navigate("/signup");
                return;
            }
            if (!token) {
                navigate("/signup");
                return;
            }

            // validate user
            const valid = await validateUser(userName, token);
            if (!valid) {
                navigate("/signup");
                return;
            }

            // fetch user data .i.e links
            const userData: UserDetailsResult = await userDetails(userName, token);
            if (userData.success === false) {
                setAlert({
                    type: 'error',
                    heading: `${userData.error}`,
                    data: 'Try reloading page',
                });
                return;
            }
            console.log(userData.data);
            if(userData.data) setLinks(userData.data);
            console.log(links)
        };

        fetchData();
    }, [userName, token, navigate]);

    return (
        <>
            {alert && <Alert {...alert} />}
            <div className="pt-8 container px-4 mx-auto h-screen dark:bg-gray-900">
                <div className="overflow-visible border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Website</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Url</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Description</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Tags</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            {links.map((link, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2">eeee{link.name}</td>
                                    <td className="px-4 py-2">{link.url}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
