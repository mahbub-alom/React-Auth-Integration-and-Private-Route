import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => [
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message);
            })
    ]

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Blue Moon</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                {user && <Link className="btn btn-ghost normal-case text-xl" to='/order'>Orders</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <button onClick={handleSignOut} className="btn btn-xs ms-2">sign out</button>
                        </>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;