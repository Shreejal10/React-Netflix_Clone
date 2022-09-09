import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
    return (
        <>
            <div className='w-full text-white'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/1900541a-9bb5-477d-bfd2-a1a370bc9493/NP-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" className='w-full h-[400px] object-cover' />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
                </div>
            </div>
            <SavedShows />
        </>
    )
}

export default Account