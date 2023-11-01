export interface IFooter {
    text : string,
    href? : string,
}
function FooterItem ({text , href} : IFooter) {
    debugger
    return (
        <ul>
            <a href={href}>
                {text}
            </a>
        </ul>
        )
}

export default FooterItem