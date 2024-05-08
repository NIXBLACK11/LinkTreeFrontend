import { FaExternalLinkAlt } from "react-icons/fa";

export const LinkCard = (props: {heading: string, url: string}) => {
    return (
        <div className="max-w-800 mx-auto pb-2" style={{ width: "30rem"}}>
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-900">
                <h3 className="py-2 px-2 font-bold text-center text-gray-800 uppercase dark:text-white">{props.heading}</h3>

                <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    {/* <span className="font-bold text-gray-800 dark:text-gray-200">{props.url}</span> */}
                    <iframe src={props.url} ></iframe>
                </div>

                <div className="flex justify-center">
                    <button 
                        className="mt-2 px-4 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                        onClick={() => {
                            window.open(props.url, '_blank');
                        }}
                    >
                        <FaExternalLinkAlt/>
                    </button>
                </div>
            </div>
        </div>
    )
}
