import { FaExternalLinkAlt } from "react-icons/fa";

export const LinkCard = (props: {heading: string, url: string}) => {
    return (
        <div className="max-w-800 mx-auto pb-2" style={{ width: "30rem"}}>
            <div className="bg-white rounded-full shadow-lg dark:bg-gray-700 flex flex-col items-center justify-center">
                <h3 className="py-2 font-bold text-gray-800 uppercase dark:text-white">{props.heading}</h3>
                <span className="py-2 font-bold text-gray-800 dark:text-gray-200">{props.url}</span>

            </div>
            <div className="flex justify-center">
                <button 
                    className="mt-2 px-4 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-transparent hover:bg-gray-500 rounded focus:outline-none"
                    onClick={() => {
                        window.open(props.url, '_blank');
                    }}
                >
                    <FaExternalLinkAlt/>
                </button>
            </div>
        </div>
    )
}
