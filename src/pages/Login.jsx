import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='w-full h-screen'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/1900541a-9bb5-477d-bfd2-a1a370bc9493/NP-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" className=' absolute w-full h-full object-cover' />
            <div className='bg-black/60 fixed top-0 left-o w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white mt-11'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>
                        <form className='w-full flex flex-col py-4'>
                            <input className='p-3 my-2 bg-gray-600 rounded' type="email" placeholder='Email' />
                            <input className='p-3 my-2 bg-gray-600 rounded' type="password" placeholder='Password' />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input type="checkbox" className='mr-2' />Remember me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-8'><span className='text-gray-600'>New to Netflix?</span>{'  '} <Link to='/signup'> Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login