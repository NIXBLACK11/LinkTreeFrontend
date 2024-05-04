import { IconContext } from "react-icons";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { deleteLink } from "../backendcalls/deleteLink";
import { getCookie } from "../utils/saveCookie";
import { Alert, AlertProps } from './Alert';
import { useState } from "react";

export const EditDeleteButtons = ({ website }: { website: string }) => {
    const [alert, setAlert] = useState<AlertProps | null>(null);
    const token = getCookie("jwtToken");
    const { userName } = useParams<{ userName: string }>();
    
    function callDelete() {
        if(userName && token && website) {
            const success = deleteLink(userName, token, website);
            if(!success) {
                setAlert({
                    type: 'error',
                    heading: 'Link Not Deleted',
                    data: '',
                });
            } else {
                setAlert({
                    type: 'success',
                    heading: 'Link Deleted',
                    data: '',
                });
            }
        }
        window.location.reload();
    }

    return (
        <>
        {alert && <Alert {...alert} />}
        <div className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700" style={{ width: "300px" }}>
            <button 
                className="justify-center content-center px-4 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100" style={{ width: "200px" }}
                // onClick={}
            >
                <IconContext.Provider value={{ size: "1.5em", className: "global-class-name mx-9" }}>
                    <div>
                        <FaRegEdit/>
                    </div>
                </IconContext.Provider>
            </button>

            <button 
                className="justify-center content-center px-4 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100" style={{ width: "200px" }}
                onClick={callDelete}
            >
                <IconContext.Provider value={{ size: "1.5em", className: "global-class-name mx-9" }}>
                    <div>
                        <MdOutlineDelete/>
                    </div>
                </IconContext.Provider>
            </button>
        </div>
        </>
    )
};
