import React from 'react'
import "./Prizes.css"
const Prices = () => {
    return (
        <div >
            <div className="p-container" id="prizes_anchor">
            <h1 className="title">Prizes</h1>
            <div className="container">

                <div className="p-card">
                    <div className="p-card-title">1st Price</div>
                    <div className="money">INR 25,000/-</div>
                    <div className="caption">With Internship Opportunities, Exciting Goodies & Lots More!</div>
                </div>
                <div className="p-card">
                    <div className="p-card-title">2nd Price</div>
                    <div className="money">INR 15,000/-</div>
                    <div className="caption">With Internship Opportunities, Exciting Goodies & Lots More!</div>
                </div>
                <div className="p-card">
                    <div className="p-card-title">3rd Price</div>
                    <div className="money">INR 7,500/-</div>
                    <div className="caption">With Internship Opportunities, Exciting Goodies & Lots More!</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Prices