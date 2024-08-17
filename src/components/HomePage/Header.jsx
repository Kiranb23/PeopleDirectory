import React from 'react';
import UserProfile from './UserProfile';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  function Home(){
    navigate('/')
  }
  return (
    <header className="flex flex-wrap gap-10 items-start ml-7 w-full max-w-[1383px] max-md:max-w-full">
      <h1 className="grow shrink self-stretch text-4xl font-bold leading-none text-violet-700 w-[185px] cursor-pointer" onClick={Home}>
        PEOPLE.CO
      </h1>
      <UserProfile />
    </header>
  );
}

export default Header;