import React, { useRef, useState } from 'react';
import bgVideo from './assets/bgVideo.mp4';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import GradientBtn from './GradientBtn';

const HeroSection = ({ isMenuShown }) => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(true);

    const videoRef = useRef();

    const handleVideoPause = () => {
        videoRef.current.pause();
        setIsVideoPlaying(false);
    }

    const handleVideoPlay = () => {
        videoRef.current.play();
        setIsVideoPlaying(true);
    }
    
    return (
        <div name='home'
        className='flex items-center justify-center w-full h-screen text-center'>

            <video ref={videoRef} src={bgVideo} autoPlay loop muted className='object-cover h-3/4 top-16 lg:h-full w-full absolute -z-10' />

            <div className={`p-8 mt-12 flex flex-col items-center justify-center duration-500 w-full ${isVideoPlaying ? '' : 'bg-black/80'} ${isMenuShown ? 'opacity-20' : 'opacity-100'}`}>
                <h1 className='text-4xl lg:text-5xl'>HACKNICHE</h1>
                <h1 className='text-4xl lg:text-5xl capitalize mb-12'>the <span className='text-thBlue font-bold'>future</span> is here</h1>

                <div className='flex flex-row justify-center items-center'>
                    <GradientBtn className='capitalize mx-12' title='REGISTER'/>

                    {
                        isVideoPlaying ? <FaPauseCircle size={30} onClick={handleVideoPause} className='cursor-pointer hover:scale-110 duration-200 text-thBlue'/> 
                        : <FaPlayCircle size={30} onClick={handleVideoPlay} className='cursor-pointer hover:scale-110 duration-200 text-thBlue'/> 
                    }

                </div>
            </div>

        </div>
    )
}

export default HeroSection
