import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";

import { getCookie } from "../utils/saveCookie";
import { validateUser } from "../backendcalls/validate";
import { Link } from "../interfaces/linksInterface";
import { userDetails, UserDetailsResult } from "../backendcalls/userDetails";
import { Alert, AlertProps } from '../components/Alert';
import { Owner } from "../components/Owner";
import { Visitor } from "../components/Visitor";

export const User = () => {
    const { userName } = useParams<{ userName: string }>();
    const token = getCookie("jwtToken");
    const navigate = useNavigate();

    const [alert, setAlert] = useState<AlertProps | null>(null);
    const [links, setLinks] = useState<Link[]>([]); // Initialize with an empty array
    const [loading, setLoading] = useState<Boolean>(true);
    const [own, setOwns] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!userName) {
                navigate("/signin");
                return;
            }
            if (!token) {
                setOwns(false);
            } else {
                // validate user
                const valid = await validateUser(userName, token);
                if (!valid) {
                    setOwns(false);
                } else {
                    setOwns(true);
                }
            }


            // fetch user data .i.e links
            const userData: UserDetailsResult = await userDetails(userName);
            if (userData.success === false) {
                setAlert({
                    type: 'error',
                    heading: `${userData.error}`,
                    data: 'Try reloading page',
                });
                return;
            }
            if(userData.data) {
                setLinks(userData.data);
            }
            setLoading(false);
        };

        fetchData();
    }, [userName, token, navigate]);

    return (
        <>
            {alert && <Alert {...alert} />}
            <div className=" pt-8 h-screen container px-4 dark:bg-gray-900 flex flex-col items-center ">
                {loading ? (
                    <>
                        <ClockLoader color="#1F2937" />
                    </> ) : (
                    <>
                        {own ? (
                        <>
                            <Owner links={links}/>
                        </> ) : (
                        <>
                            <Visitor links={links}/>
                        </>
                        )
                        }
                    </>
                )
                }
            </div>
        </>
    );
};
