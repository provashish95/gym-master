import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import auth from '../../firebase.init';
import './Header.css';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand fs-2 fw-bolder" to="/">
                    GYM MASTER
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <CustomLink className="nav-link" aria-current="page" to="/">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/services">Services</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/blogs">Blogs</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink className="nav-link" to="/about">About</CustomLink>
                        </li>

                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {
                                user ?
                                    <CustomLink onClick={handleSignOut} className="nav-link" to="/login">Sign Out</CustomLink>
                                    :
                                    <CustomLink className="nav-link" to="/login">Login</CustomLink>
                            }

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;