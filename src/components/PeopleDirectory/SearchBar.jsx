import React from "react";
import Popup from "reactjs-popup";
import EditDetails from "../Page3/EditDetails";

function SearchBar() {
  return (
    <div className=" ml-60 flex z-10 flex-wrap gap-1 items-start self-end mt-4 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-col text-base leading-none whitespace-nowrap min-w-[240px] text-slate-400 w-[312px]">
        <div className="flex flex-col max-w-full rounded-none w-[312px]">
          <div className="flex flex-col w-full bg-white rounded border border-solid border-slate-300">
            <div className="flex gap-5 justify-between ml-4 max-w-full w-[290px] max-md:ml-2.5">
              <input
                type="text"
                placeholder="Search"
                className="gap-2.5 self-stretch py-2 w-full bg-transparent border-none focus:outline-none"
              />
              <button aria-label="Search" className="p-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/faebb3a8f7af2f2d1ea0fac4318fed552307a294ac3724ef2e615c8da6b2d0af?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
                  className="object-contain shrink-0 my-auto w-6 aspect-square"
                  alt=""
                />
              </button>
            </div>
            <div className="shrink-0 h-px border border-solid bg-slate-600 border-slate-600" />
          </div>
        </div>
      </div>
      <button
        aria-label="Filter"
        className="flex flex-col justify-center p-2.5 w-10"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6dbbfa945c399621c6e6c3841335ace56c1efce189d1f26305f190c3fe7a420?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
          className="object-contain w-5 aspect-[1.11] stroke-[1px] stroke-slate-900"
          alt=""
        />
      </button>
      <Popup
        trigger={
          <button className="flex overflow-hidden gap-2 justify-center items-center p-2 text-sm font-bold tracking-wider leading-tight text-white uppercase bg-violet-700 rounded">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0202b1e9b888316555690a817813409b17d04d068f14338725d43575874cfbc4?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt=""
            />
            <span className="gap-2.5 self-stretch my-auto">Add Member</span>
          </button>
        }
        modal
        nested
      >
        <EditDetails />
      </Popup>
    </div>
  );
}

export default SearchBar;
