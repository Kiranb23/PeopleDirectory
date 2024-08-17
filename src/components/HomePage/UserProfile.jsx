import React from 'react';

function UserProfile() {
  return (
    <div className="flex gap-2 items-center mr-7">
      <button className="flex overflow-hidden gap-2 justify-center items-center self-stretch p-2 my-auto w-9 h-9 rounded border-0 border-solid border-slate-300" aria-label="Notifications">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/248f1d50f21234d059ad3e0eb203e19622fcaea43ec27c87bf4a1e43a8884ec9?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090" alt="" className="object-contain self-stretch my-auto w-5 aspect-square" />
      </button>
      <div className="flex gap-2 items-center self-stretch my-auto text-base leading-none text-center text-slate-900">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/77958cd3f9a17d31c5d8940c0aa855e01bdca994c9ff2dcd51a0d354f54be357?placeholderIfAbsent=true&apiKey=63abf3089721463fa7d83cd1119f5090" alt="Jane Doe" className="object-contain shrink-0 self-stretch my-auto w-9 rounded-full aspect-square" />
        <span className="self-stretch my-auto">Jane Doe</span>
      </div>
    </div>
  );
}

export default UserProfile;