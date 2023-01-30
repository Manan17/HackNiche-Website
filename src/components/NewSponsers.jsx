import React from "react";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import celo_logo from './assets/celo_logo.png';
import echo3d from './assets/echo3d_logo.jpeg';
import elearnmarkets from './assets/elearnmarkets_logo.png';
import fueler from './assets/fueler_logo.PNG';
import sleepyowl from './assets/sleepyowl_logo.png'
import taskcade from './assets/taskcade_logo.png'


const NewSponsors = () => {
    return (
        <>
            <div class="sponsor-body" id="sponsors_anchor">
                <div class="sponsor-header">
                    <h1>
                        <span data-aos="fade-right">SPON</span>
                        <span data-aos="fade-left">SORS</span>
                    </h1>
                </div>
            </div>



            <h2 className="text-center text-5xl p-2">Title Sponser</h2>

            <h2 className="title ">Celo</h2>
            <div className="flex justify-center items-center pb-8">
                <img src={celo_logo} alt="celo logo" width="25%" height="15%" />
            </div>


            <div classNAme="w-full text-white ">
                <Tab.Group>
                    <Tab.List className="w-full flex justify-center">

                        <Tab as={Fragment}>
                            {({ selected }) => (
                                /* Use the `selected` state to conditionally style the selected tab. */
                                <button
                                    className={`w-1/2 py-4 rounded-md font-semibold text-xl
                    ${selected
                                            ? "bg-gradient-to-b from-yellow-300 to-yellow-500 text-white"
                                            : null
                                        } 
                  `}
                                >
                                    GOLD PARTNERS
                                </button>
                            )}
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="">
                        <Tab.Panel>


                            {/* <div className="flex flex-row sm:flex-row md:flex-row justify-center items-center">


                                <div className="w-full flex flex-col items-center justify-center ">
                                    <div className="">
                                        <figure class="max-w-lg ">
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src={fueler}
                                                alt="image description"
                                            />
                                        </figure>
                                    </div>

                                    <div className="">
                                        <figure class="max-w-lg ">
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src={taskcade}
                                                alt="image description"
                                            />
                                        </figure>
                                    </div>
                                </div>


                                <div className=" mt-10 flex flex-col justify-center items-center ">


                                    <div className="">
                                        <figure class="max-w-lg">
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src={elearnmarkets}
                                                alt="image description"
                                            />
                                        </figure>
                                    </div>
                                    <div className="">
                                        <figure class="max-w-lg ">
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src={echo3d}
                                                alt="image description"
                                            />
                                        </figure>
                                    </div>

                                </div>


                            </div> */}


                            {/* <div className="flex flex-row justify-center items-center ">

                                <div className="flex flex-row w-full">
                                    <div className="mx-8">
                                        <figure class="max-w-lg px-4 py-20">
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src={fueler}
                                                alt="image description"
                                            />
                                        </figure>
                                    </div>
                                    <div className="mx-8">
                                        <figure class="max-w-lg px-4 py-20">
                                            <img
                                                class="h-[7rem] max-w-full rounded-lg"
                                                src={elearnmarkets}
                                                alt="image description"
                                            />
                                        </figure>
                                    </div>
                                </div>

                                <div className="flex w-full">
                                <div className="mx-8">
                                        <figure class="max-w-lg px-4 py-20">
                                            <img
                                                class="h-[7.3rem] max-w-full rounded-lg"
                                                src={taskcade}
                                                alt="image description"
                                            />
                                        </figure>
                                    </div>
                                    <div className="mx-8">
                                        <figure class="max-w-lg px-4 py-20">
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src={echo3d}
                                                alt="image description"
                                            />
                                        </figure>
                                    </div>
                                </div>

                            </div> */}

                            <div className="grid grid-cols-2 grid-rows-2 place-items-center">
                                <div className="mx-8">
                                    <figure class="max-w-lg px-4 py-20">
                                        <img
                                            class="h-[8rem] w-[20rem] max-w-full rounded-lg"
                                            src={fueler}
                                            alt="image description"
                                        />
                                    </figure>
                                </div><div className="mx-8">
                                    <figure class="max-w-lg px-4 py-20">
                                        <img
                                            class="h-[8rem] w-[20rem] max-w-full rounded-lg"
                                            src={taskcade}
                                            alt="image description"
                                        />
                                    </figure>
                                </div><div className="mx-8">
                                    <figure class="max-w-lg px-4 py-20">
                                        <img
                                            class="h-[8rem] w-[20rem] max-w-full rounded-lg"
                                            src={elearnmarkets}
                                            alt="image description"
                                        />
                                    </figure>
                                </div><div className="mx-8">
                                    <figure class="max-w-lg px-4 py-20">
                                        <img
                                            class="h-[8rem] w-[20rem] max-w-full rounded-lg"
                                            src={echo3d}
                                            alt="image description"
                                        />
                                    </figure>
                                </div>
                            </div>

                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>

            <h2 className="text-center text-5xl p-2">Coffee Sponser</h2>
            <h2 className="title ">Sleepy Owl Coffee</h2>
            <div className="flex justify-center items-center pb-8">
                <img src={sleepyowl} alt="sleepyowl logo" width="25%" height="15%" />
            </div>

        </>
    );
};

export default NewSponsors;