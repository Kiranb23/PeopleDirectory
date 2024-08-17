import React from 'react';
import { useNavigate } from 'react-router-dom';
import PeopleDirectory from '../PeopleDirectory/PeopleDirectory';

function SidebarItem({ icon, text, active }) {
  const navigate = useNavigate();

  function ShowItem(){
    if (text == "People Directory"){
      navigate("/peopleDirectory")
    }
  }

  return (
    <div className={`flex overflow-hidden flex-col justify-center items-start p-2 w-full ${active ? 'text-violet-700' : 'text-stone-900'} whitespace-nowrap bg-white rounded max-w-[208px] ${active ? '' : 'mt-2'}`}>
      <div className="flex gap-2 items-center cursor-pointer" onClick={ShowItem}>
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 rounded aspect-square" />
        <div className="self-stretch my-auto">{text}</div>
      </div>
    </div>
  );
}

export default SidebarItem;