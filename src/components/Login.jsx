import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProviders';


const Login = () => {

    const { logIn, signInGoogle } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officia debitis neque facere provident ea!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" id="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" id="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </div>
                    </form>
                    <div className='mx-auto'>
                        <button onClick={handleGoogleSignIn} className="btn btn-success">Sign in with google</button>
                    </div>
                    <Link to='/register'><button className="btn btn-link">New to auth master ? Please register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;