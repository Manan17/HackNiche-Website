import React from 'react';
import GradientBtn from './GradientBtn';
import { HiBars3 } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-scroll';

const NavBar = ({ isMenuShown, setIsMenuShown }) => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'products'
        },
        {
            id: 3,
            link: 'developer API'
        },
        {
            id: 4,
            link: 'customers'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    return (
        <>

            <div className='fixed w-full h-16 bg-black text-white z-20'>

                <div className='flex justify-between items-center max-w-screen-xl mx-auto px-4 h-fulls'>

                    <div>
                        <h1 className='text-thBlue tracking-widest text-3xl'>ANTON</h1>
                    </div>

                    <div className='hidden lg:flex items-center'>
                        <ul className='flex'>
                            {
                                links.map(({ id, link }) => (
                                    <li key={id} className='p-4 uppercase duration-200 hover:text-thBlue cursor-pointer'>
                                        <Link to={link} smooth duration={500}>
                                            {link}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <GradientBtn className='ml-4 capitalize' title='get anton' />
                    </div>

                    <div onClick={() => setIsMenuShown(!isMenuShown)} className='block lg:hidden cursor-pointer'>
                        {isMenuShown ? <RxCross2 size={30} /> : <HiBars3 size={30} />}
                    </div>

                </div>

            </div>

            <div className={`w-full bg-black text-white fixed z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${isMenuShown ? 'top-10 rounded-b-2xl opacity-95' : 'top-[-100%]'}`}>
                <ul>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className='p-4 uppercase cursor-pointer'>
                                <Link onClick={() => setIsMenuShown(false)} to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))
                    }
                    <GradientBtn className='m-10 capitalize' title='get anton' />
                </ul>
            </div>

        </>
    )
}

export default NavBar
