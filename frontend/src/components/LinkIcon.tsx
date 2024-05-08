export const LinkIcon = (props: {url: string}) => {
    function checkSpecial(url: string): string {
        const githubRegex = /github\.com/i;
        const telegramRegex = /t\.me/i;
        const instagramRegex = /instagram\.com/i;
        const linkedinRegex = /linkedin\.com/i;
        const leetcodeRegex = /leetcode\.com/i;
    
        if (githubRegex.test(url)) {
            return "github";
        } else if (telegramRegex.test(url)) {
            return "telegram";
        } else if (instagramRegex.test(url)) {
            return "instagram";
        } else if (linkedinRegex.test(url)) {
            return "linkedin";
        } else if(leetcodeRegex.test(url)) {
            return "leetcode";
        }

        return "";
    }
    return (
        <div>
            {/* <p>hh</p> */}
            {checkSpecial(props.url) === "telegram" && (
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <img className="w-10 m-2" src="/telegram.png" alt="Telegram Icon" />
                </a>
            )}
            {checkSpecial(props.url) === "instagram" && (
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <img className="w-10 m-2" src="/instagram.png" alt="Telegram Icon" />
                </a>
            )}
            {checkSpecial(props.url) === "github" && (
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <img className="w-10 m-2" src="/github.png" alt="Telegram Icon" />
                </a>
            )}
            {checkSpecial(props.url) === "linkedin" && (
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <img className="w-10 m-2" src="/linkedin.png" alt="Telegram Icon" />
                </a>
            )}
            {checkSpecial(props.url) === "leetcode" && (
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    <img className="w-10 m-2" src="/leetcode.png" alt="Telegram Icon" />
                </a>
            )}
        </div>
    )
}
