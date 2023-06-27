import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className=' py-6 pb-16 flex flex-row '>
                <img src='/Logo.png' className='h-10' />
                <div className='m-auto' >
                    <div className="relative mx-auto text-gray-600 ">
                        <input className="border-2 border-gray-300 bg-white h-10  px-5 pr-16 rounded-md text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search for headlines" style={{width:'400px'}} />
                            
                        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4 " >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar