import {pageLinks} from "../data";
import PageLink from "./PageLink";

const PageLinks = ({parentClass, itemClass}) => {
    return (
        <ul className={parentClass} id="nav-links">
            {
                pageLinks.map((link) => {
                    return (
                        <PageLink itemClass={itemClass} {...link}/>
                    );
                })
            }
        </ul>
    );
}

export default PageLinks;