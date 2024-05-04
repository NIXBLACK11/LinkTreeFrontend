import React from "react"
import { Link } from "../interfaces/linksInterface"
import { LinkCard } from "./LinkCard"
import { AddButton } from "./AddButton"
import { EditDeleteButtons } from "./EditDeleteButtons"

export const Owner = (props: { links: Link[] }) => {
    return (
        <>
            {props.links.map((link, index) => (
                <tr key={index}>
                    {Object.entries(link).map(([key, value], idx) => (
                        <React.Fragment key={`${key}-${idx}`}>
                            <div className="py-2 pt-6 pb-6 flex flex-col items-center justify-center">
                                <LinkCard heading={key} url={value}/>
                                <div>
                                    <EditDeleteButtons website={key}/>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </tr>
            ))}
            <AddButton/>
        </>
    )
}