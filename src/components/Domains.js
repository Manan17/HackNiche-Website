import React from 'react'
import "./Domains.css"
import { TfiWorld } from "react-icons/tfi"
import { AiFillRobot } from "react-icons/ai"
import {SiBlockchaindotcom} from 'react-icons/si'
import {AiOutlineCloud} from 'react-icons/ai'
import {GiShakingHands} from 'react-icons/gi'
import {GiVintageRobot} from 'react-icons/gi'
const Domains = () => {
    return (
        <div >
            <div className="d-container" id="domain_anchor">
            <h1 className="title">Domains</h1>
            <div className="domain-container">
                <div className="domain">

                    <div>
                        <SiBlockchaindotcom  className="d-icon" size={70} />
                    </div>
                    Blockchain

                </div>
                <div className="domain">

                    <div>
                        <TfiWorld className="d-icon" size={70} />
                    </div>
                    Webapp
                </div>
                <div className="domain">
                    <div>
                        <AiFillRobot className="d-icon" size={70} />
                    </div>
                    AI ML
                </div>
                <div className="domain">
                    <div>
                        <AiOutlineCloud className="d-icon" size={70} />
                    </div>
                    Cloud Technology
                </div>
                <div className="domain">
                    <div>
                        <GiShakingHands className="d-icon" size={70} />
                    </div>
                    Social Cause
                </div>
                <div className="domain">
                    <div>
                        <GiVintageRobot className="d-icon" size={70} />
                    </div>
                    IOT
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Domains