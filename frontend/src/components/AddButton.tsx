import { useParams } from "react-router-dom";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import { getCookie } from "../utils/saveCookie";
import { LinkForm } from "./LinkForm";
import { addDetails } from "../backendcalls/addDetails";

export const AddButton = () => {
    const { userName } = useParams<{ userName: string }>();
    const [showForm, setShowForm] = useState(false);
    const [_data, setData] = useState<{ website: string, url: string }>();
    const token = getCookie("jwtToken");

    const handleAddDetails = (formData: { website: string, url: string }) => {
        setData(formData); // Update data state when form is submitted
        if(userName && token) {
            addDetails(userName, formData.website, formData.url, token);
        }
        window.location.reload();
    };

    return (
        <>
            {showForm && (
                <LinkForm handleAddDetails={handleAddDetails} setShowForm={setShowForm}/>
            )}
            <div className="mt-6">
                <button
                    onClick={() => setShowForm(true)}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                    <IoMdAdd/>
                </button>
            </div>
        </>
    )
}
