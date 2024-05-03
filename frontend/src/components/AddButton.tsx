import { useParams } from "react-router-dom";
import { addDetails } from "../backendcalls/addDetails"
import { getCookie } from "../utils/saveCookie";

export const AddButton = () => {
    const { userName } = useParams<{ userName: string }>();
    const token = getCookie("jwtToken");
    return (
        <div className="mt-6">
            <button 
                onClick={() => {
                    if(userName && token) {
                        addDetails(userName, "test", "test.com", token)
                    }
                }}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
                Add Link
            </button>
        </div>
    )
}