import { useEffect } from "react";
import { Links } from "../components/Links";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../utils/saveCookie";
import { validateUser } from "../backendcalls/validate";


export const User = () => {
    const { userName } = useParams<{ userName: string }>();
    console.log(userName);
    const navigate = useNavigate();

    useEffect(() => {
        const safetyCheck = async () => {
            if (!userName) {
                navigate("/signup");
            }
            const token = getCookie("jwtToken");
            if(!token) {
                navigate("/signup");
            }

            if(userName && token) {
                const valid = await validateUser(userName, token);
                if(!valid) navigate("/signup");
            }
        }
        safetyCheck();
    }, [userName, navigate]);

    return (
        <div className="dark:bg-gray-900 h-screen">
            <Links/>
        </div>
    );
}