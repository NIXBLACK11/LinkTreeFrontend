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
    const [links, setLinks] = useState<Link[]>([]);
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
                const valid = await validateUser(userName, token);
                if (!valid) {
                    setOwns(false);
                } else {
                    setOwns(true);
                }
            }


            const userData: UserDetailsResult = await userDetails(userName);
            if (userData.success === false) {
                setAlert({
                    type: 'error',
                    heading: `user may not exist`,
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
            <div 
                className="flex flex-col items-center bg-repeat min-h-screen"
                style={{ backgroundImage: 'url("background.jpg")' }}
            >
                {loading ? (
                    <>
                        <ClockLoader color="#1F2937" />
                    </> ) : (
                    <>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-4xl uppercase">{userName}</h1>
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
