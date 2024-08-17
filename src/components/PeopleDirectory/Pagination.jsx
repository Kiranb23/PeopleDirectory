import React from 'react';

function Pagination() {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center px-6 pt-3 pb-4 w-full text-sm font-semibold leading-none whitespace-nowrap border-t border-solid border-t-gray-200 text-slate-700 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-1 shrink items-center self-stretch my-auto basis-0 min-w-[240px]">
        <button className="flex overflow-hidden gap-1 justify-center items-center self-stretch px-3 py-2 my-auto bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/01030815e3e30616a86a6dc387d8751fc0542c1932176181df001117eb0a6472?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
          <span className="self-stretch px-0.5 my-auto">Previous</span>
        </button>
      </div>
      <div className="flex gap-0.5 items-start self-stretch my-auto font-medium text-center min-w-[240px] text-slate-600">
        {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
          <button key={index} className={`flex overflow-hidden flex-col justify-center items-center w-10 h-10 rounded-lg ${page === 1 ? 'bg-gray-50 text-slate-800' : ''}`}>
            <span className="self-stretch px-2 py-2.5 rounded-lg min-h-[40px]">{page}</span>
          </button>
        ))}
      </div>
      <div className="ml-48 flex flex-1 shrink items-center self-stretch my-auto basis-0 min-w-[240px]">
        <button className="flex overflow-hidden gap-1 justify-center items-center self-stretch px-3 py-2 my-auto bg-white rounded-lg border border-gray-300 border-solid shadow-sm">
          <span className="self-stretch px-0.5 my-auto">Next</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d1b4ccbd7ec4a5ea3ceb0843eee243733dded8e5a0dc22e34dcd51673d66389?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;