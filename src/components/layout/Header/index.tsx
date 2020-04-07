import React from 'react';
import Link from 'next/link';
import { useAuthContext } from '@src/contexts/AuthContext';

const Header: React.FC = () => {
  const { userData } = useAuthContext();
  return (
    <header className="w-screen flex bg-gray-800">
      <nav className="w-full flex justify-between">
        <div className="p-4">
          <Link href="/">
            <a className="text-2xl uppercase">
              <img src="/title.png" alt="logo" />
            </a>
          </Link>
        </div>
        <ul className="flex items-center justify-between">
          <Link href={userData ? '/profile' : '/login'}>
            <li className="px-4 uppercase hover:bg-gray-900 p-4 h-full leading-10 cursor-pointer">
              <a>{userData ? 'Profile' : 'Login'}</a>
            </li>
          </Link>
          <Link href="/about">
            <li className="px-4 uppercase hover:bg-gray-900 p-4 h-full leading-10 cursor-pointer">
              <a>About</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
