import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {userLogin} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        console.log({email, password})

        userLogin(email,password)
        .then(result => {
            console.log(result.user)
            setUser(user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered bg-[#F3F3F3]" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-[#1E1E1E] text-white">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Dont’t Have An Account ? 
                    <Link to="/auth/register" className='text-red-600'> Register</Link></p>
            </div>   
        </div>
    );
};

export default Login;