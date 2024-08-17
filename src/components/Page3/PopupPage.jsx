import React from 'react';
import Header from '../HomePage/Header';
import Sidebar from '../PeopleDirectory/Sidebar';
import MyComponent from './Page_3';

function PopupPage() {
  return (
    <div className="flex overflow-hidden flex-col pt-4 pb-11 bg-white">
      <Header />
      <div className="flex flex-col mt-5 w-full max-md:max-w-full">
        <hr className="w-full border border-solid bg-slate-200 border-slate-200 min-h-[1px] max-md:max-w-full" />
      </div>
      <div className="w-full max-w-[1408px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <MyComponent />
        </div>
      </div>
    </div>
  );
}

export default PopupPage;