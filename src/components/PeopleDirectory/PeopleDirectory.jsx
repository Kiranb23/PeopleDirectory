import React, { useState } from 'react';
import Header from '../HomePage/Header';
import Sidebar from './Sidebar';
import TeamMembersTable from './TeamMembersTable';
import Pagination from './Pagination';

function PeopleDirectory() {
  return (
    <div className="flex overflow-hidden flex-col py-4 bg-white">
      <Header />
      <div className="flex flex-col mt-5 w-full max-md:max-w-full">
        <div className="w-full border border-solid bg-slate-200 border-slate-200 min-h-[1px] max-md:max-w-full" />
      </div>
      <div className="w-full max-w-[1412px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <main className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col pt-4 mt-5 w-full max-md:max-w-full">
              <TeamMembersTable />
              <Pagination />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default PeopleDirectory;