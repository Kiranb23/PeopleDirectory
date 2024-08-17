import React from "react";

function MainContent() {
  return (
    <main className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
      <section className="flex overflow-hidden flex-col grow mt-3.5 w-full text-4xl font-semibold leading-none text-gray-900 bg-white rounded-xl border border-gray-200 border-solid shadow-sm min-h-[874px] max-md:max-w-full">
        <div className="flex flex-col w-full bg-white max-md:max-w-full">
          <div className="gap-4 px-6 pt-5 w-full min-h-[873px] pb-[825px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
            Welcome, Jane Doe!
          </div>
          <hr className="w-full bg-gray-200 fill-gray-200 min-h-[1px] max-md:max-w-full" />
        </div>
      </section>
    </main>
  );
}

export default MainContent;
