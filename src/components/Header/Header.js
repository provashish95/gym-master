import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                {/* <CustomLink className="navbar-brand" to="/"></CustomLink> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink className="nav-link" aria-current="page" to="/">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/services">Services</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/blogs">Blogs</CustomLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;