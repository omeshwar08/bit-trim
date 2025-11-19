import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../contextApi/ContextApi';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
        mode: "onTouched"
    });
    const navigate = useNavigate();
    const { setToken } = useStoreContext();
    const [loader, setLoader] = useState(false);
    const loginHandler = async (data) => {
        setLoader(true);
        try {
            const response = await api.post("/api/auth/public/login", data)
            localStorage.setItem("JWT_TOKEN", response.data.token)
            setToken(response.data.token);
            toast.success("Login Successfull");
            reset();
            navigate("/dashboard");
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            navigate("/error")
            toast.error("Error logging in")
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
            <form onSubmit={handleSubmit(loginHandler)}
                className='sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md'
            >
                <h1 className='text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl'>Login Here</h1>
                <hr className='mt-2 mb-5 text-black' />
                <div className='flex flex-col gap-3'>
                    <TextField
                        label="User Name"
                        required
                        id="username"
                        type="text"
                        message="Username is required"
                        placeholder="Type your username here"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="Password is required"
                        placeholder="Type your password here"
                        register={register}
                        min={8}
                        errors={errors}
                    />
                </div>
                <button
                    type='submit'
                    className='bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3'
                    disabled={loader}
                >
                    {loader ? "Loading..." : "Login"}
                </button>
                <p className='text-center text-sm text-slate-700 mt-6'>
                    New User?
                    <Link
                        className='font-semibold underline hover:text-black'
                        to="/register"
                    >
                        <span className='text-btnColor'>Sign Up</span>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default LoginPage;