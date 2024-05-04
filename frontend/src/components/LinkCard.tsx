export const LinkCard = (props: {heading: string, url: string}) => {
    return (
        <div className="w-100 flex flex-col items-center justify-center pb-1">
            <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h3 className="py-2 px-2 font-bold text-center text-gray-800 uppercase dark:text-white">{props.heading}</h3>

                <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200">{props.url}</span>
                </div>

                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
            </div>
        </div>
    )
}