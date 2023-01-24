import React from 'react'
import "./Prices.css"
const Prices = () => {
    return (
        <div>
            <h1 className="title">Prices</h1>
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
    )
}

export default Prices