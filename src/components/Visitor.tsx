import React from "react"
import { Link } from "../interfaces/linksInterface"
import { LinkCard } from "./LinkCard"
import { LinkIcon } from "./LinkIcon";

export const Visitor = (props: { links: Link[] }) => {
    function checkSpecial(url: string): boolean {
        const githubRegex = /github\.com/i;
        const telegramRegex = /t\.me/i;
        const instagramRegex = /instagram\.com/i;
        const linkedinRegex = /linkedin\.com/i;
        const leetcodeRegex = /leetcode\.com/i;
    
        if (githubRegex.test(url)) {
            return true;
        } else if (telegramRegex.test(url)) {
            return true;
        } else if (instagramRegex.test(url)) {
            return true;
        } else if (linkedinRegex.test(url)) {
            return true;
        } else if (leetcodeRegex.test(url)) {
            return true;
        }
    
        return false;
    }
    
    return (
        <>
            <div className="flex flex-col w-screen items-center">
                <ul className="flex flex-row">
                {props.links.map((link, _index) => (
                    Object.entries(link).map(([_key, value]) => (
                        checkSpecial(value) &&
                            <div className="flex flex-col items-center m-4">
                                <LinkIcon url={value}/>
                            </div>
                    ))
                ))}
                </ul>
            </div>

            {props.links.map((link, index) => (
                <tr key={index}>
                    {Object.entries(link).map(([key, value], idx) => (
                        <React.Fragment key={`${key}-${idx}`}>
                            <div className="py-2 pt-3 pb-6 flex flex-col items-center justify-center">
                                {!checkSpecial(value) &&
                                    <>
                                        <LinkCard heading={key} url={value}/>
                                    </>
                                }
                            </div>
                        </React.Fragment>
                    ))}
                </tr>
            ))}
        </>
    )
}