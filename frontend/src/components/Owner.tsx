import React from "react"
import { Link } from "../interfaces/linksInterface"
import { LinkCard } from "./LinkCard"
import { AddButton } from "./AddButton"

export const Owner = (props: { links: Link[] }) => {
    return (
        <>
            {props.links.map((link, index) => (
                <tr key={index}>
                    {Object.entries(link).map(([key, value], idx) => (
                        <React.Fragment key={`${key}-${idx}`}>
                            <div className="py-2">
                                <LinkCard heading={key} url={value}/>
                            </div>
                        </React.Fragment>
                    ))}
                </tr>
            ))}
            <AddButton/>
        </>
    )
}