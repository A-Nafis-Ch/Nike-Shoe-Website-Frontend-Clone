import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-around items-center p-2 h-[15vh]'>
    <div className="logo flex items-center">
        <img src="../public/images/brand_logo.png" alt="" />
    </div>

    <div className="links">
        <ul className='flex gap-4 text-base font-semibold text-[15px]'>
            <li><a href="">MENU</a></li>
            <li><a href="">LOCATION</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>
    </div>

    <button className="bg-[#d01c28] text-white px-5 py-5 font-semibold cursor-pointer rounded">
        Login
    </button>
</nav>

    )
}

export default Navbar
