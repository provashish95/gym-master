import React from 'react';
import { Link, useMatch, useResolvedPath, LinkProps } from 'react-router-dom';


const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{ borderBottom: match ? "1px solid #C7C8C9" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {/* {match && " (active)"} */}
        </div>
    );
};

export default CustomLink;