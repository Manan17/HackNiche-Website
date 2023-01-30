import React from "react";
import "./Prizes.css";
const Prices = () => {
  return (
    <div>
      <div className="p-container" id="prizes_anchor">
        <h1 className="title ">Prizes</h1>

        <div className="flex flex-col md:flex-row sm:flex-row lg:flex-row justify-between items-center sm:p-3 md:p-3 gap-[2rem]">
          <div class="cursor-pointer bg-black block max-w-sm p-10  border border-gray-200 rounded-lg shadow ">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              1st Prize
            </h2>
            <ul class="list-disc">
              {/* <li class="font-normal text-white ">
                Team will be awarded prizes worth 2.5 Lakhs
              </li> */}
              <li class="font-normal text-white ">Cash Prize of Rs. 25,000</li>
              {/* <li class="font-normal text-white ">
                Digital Ocean credits worth Rs. 75,000.
              </li>
              <li class="font-normal text-white ">
                Discount Coupons on courses of AlgoUniversity worth Rs.
                1,00,000.
              </li>
              <li class="font-normal text-white ">
                Discount Coupons on courses of GeeksfirGeeks worth Rs. 8,000.
              </li>
              <li class="font-normal text-white ">
                Discount Coupons on courses of Coding Ninjas worth Rs. 62,500.
              </li> */}
            </ul>
          </div>

          <div class="cursor-pointer block max-w-sm p-10 border border-gray-200 rounded-lg shadow ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              2nd Prize
            </h5>
            <ul class="list-disc">
              {/* <li class="font-normal text-white ">
                Team will be awarded prizes worth 2.5 Lakhs
              </li> */}
              <li class="font-normal text-white ">Cash Prize of Rs. 15,000</li>
              {/* <li class="font-normal text-white ">
                Digital Ocean credits worth Rs. 75,000.
              </li>
              <li class="font-normal text-white ">
                Discount Coupons on courses of AlgoUniversity worth Rs.
                1,00,000.
              </li>
              <li class="font-normal text-white ">
                Discount Coupons on courses of GeeksfirGeeks worth Rs. 8,000.
              </li>
              <li class="font-normal text-white ">
                Discount Coupons on courses of Coding Ninjas worth Rs. 62,500.
              </li> */}
            </ul>
          </div>

          <div class="cursor-pointer block max-w-sm p-10  border border-gray-200 rounded-lg shadow ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              3rd Prize
            </h5>
            <ul class="list-disc">
              {/* <li class="font-normal text-white ">
                Team will be awarded prizes worth 2.5 Lakhs
              </li> */}
              <li class="font-normal text-white ">Cash Prize of Rs. 10,000</li>
              {/* <li class="font-normal text-white ">
                Digital Ocean credits worth Rs. 75,000.
              </li>
              <li class="font-normal text-white ">
                Discount Coupons on courses of AlgoUniversity worth Rs.
                1,00,000.
              </li>
              <li class="font-normal text-white ">
                Discount Coupons on courses of GeeksfirGeeks worth Rs. 8,000.
              </li>
              <li class="font-normal text-white ">
                Discount Coupons on courses of Coding Ninjas worth Rs. 62,500.
              </li> */}
            </ul>
          </div>
        </div>
        {/* <div className="container">

                <div className="p-card">
                    <div className="p-card-title">1st Prize</div>
                    <div className="money">INR 25,000/-</div>
                    <div className="caption">With Internship Opportunities, Exciting Goodies & Lots More!</div>
                </div>
                <div className="p-card">
                    <div className="p-card-title">2nd Prize</div>
                    <div className="money">INR 15,000/-</div>
                    <div className="caption">With Internship Opportunities, Exciting Goodies & Lots More!</div>
                </div>
                <div className="p-card">
                    <div className="p-card-title">3rd Prize</div>
                    <div className="money">INR 10,000/-</div>
                    <div className="caption">With Internship Opportunities, Exciting Goodies & Lots More!</div>
                </div>
            </div> */}
      </div>
    </div>
  );
};

export default Prices;
