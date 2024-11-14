import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Registation = () => {

    const {createNewUser,setUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")

        console.log({name,photo,email,password})

        createNewUser(email,password)
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
                <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="your phoro url" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered bg-[#F3F3F3]" required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-[#1E1E1E] text-white">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Alrady Have An Account ? 
                    <Link to="/auth/login" className='text-red-600'> Login</Link></p>
            </div>   
        </div>
    );
};

export default Registation;