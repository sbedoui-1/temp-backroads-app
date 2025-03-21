const PageLink = ({id, href, text, itemClass}) => {
    return (
        <li id={id}>
            <a href={href} className={itemClass}> {text} </a>
        </li>
    );
}

export default PageLink;