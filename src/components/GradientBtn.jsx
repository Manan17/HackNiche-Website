import React from 'react'

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const GradientBtn = ({title, className}) => {
  return (
    // Need to change the link according to the registration form
    <button onClick={() => openInNewTab('https://google.com')} 
    className={`bg-gradient-to-r from-thOrange to bg-thBlue py-2 px-6 text-black rounded-xl duration-300 hover:scale-110 ${className}`}>{title}</button>
  )
}

export default GradientBtn
