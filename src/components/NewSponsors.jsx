import React from "react";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import devfolio_logo from "./sponsor-logos/Devfolio_Logo-White@2x.png";
import polygon_logo from "./sponsor-logos/Polygon_Logo-White@2x.png";
import filecoin_logo from "./sponsor-logos/Filecoin White.png";
import replit_logo from "./sponsor-logos/Replit-Dark-Background.png";
import solana_logo from "./sponsor-logos/Solana Dark.png";

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
      <div classNAme="w-full text-white ">
        <Tab.Group>
          <Tab.List className="w-full flex justify-center">
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={`w-1/3 py-4 rounded-md font-semibold text-xl
                    ${
                      selected
                        ? "bg-gradient-to-b from-slate-300 to-slate-600  text-white"
                        : null
                    } 
                  `}
                >
                  PLATINUM
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={`w-1/3 py-4 rounded-md font-semibold text-xl
                    ${
                      selected
                        ? "bg-gradient-to-b from-yellow-300 to-yellow-500 text-white"
                        : null
                    } 
                  `}
                >
                  GOLD
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels className="my-4">
            <Tab.Panel>
              <div className="w-full flex flex-col items-center justify-center px-4">
                <div className="mx-8">
                  <figure class="max-w-lg px-4 py-20">
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={devfolio_logo}
                      alt="image description"
                    />
                  </figure>
                </div>

                <div className="mx-8">
                  <figure class="max-w-lg px-4 py-20">
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={polygon_logo}
                      alt="image description"
                    />
                  </figure>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="w-full flex flex-col items-center px-4">
                <div className="mx-8">
                  <figure class="max-w-lg px-4 py-20">
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={filecoin_logo}
                      alt="image description"
                    />
                  </figure>
                </div>
                <div className="mx-8">
                  <figure class="max-w-lg px-4 py-20">
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={solana_logo}
                      alt="image description"
                    />
                  </figure>
                </div>
                <div className="mx-8">
                  <figure class="max-w-lg px-4 py-20">
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src={replit_logo}
                      alt="image description"
                    />
                  </figure>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default NewSponsors;
