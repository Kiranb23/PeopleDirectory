import React from 'react';
import SidebarItem from './SidebarItem';

function Sidebar() {
  const sidebarItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ce436b16f4a1c32b7dd99982c9b436dddfadbf631a1b3924e9e2bc70dc7bd3d?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090", text: "Overview", active: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/081752c441bbf9114d4dbaa1e1edc25dc11c773df952fd723b25cf296d20ff3a?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090", text: "People Directory", active: false }
  ];

  return (
    <nav className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
      <div className="flex gap-2.5 items-start p-4 w-full text-base font-semibold leading-none bg-white">
        <div className="flex flex-col w-52">
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} {...item} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;