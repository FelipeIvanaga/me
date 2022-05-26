import { NextComponentType } from 'next';
import Link from 'next/link';
import LanguageDropdown from './LanguageDropdown';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar: NextComponentType = () => {
  return (
    <div className="fixed w-full top-0 bg-gray-100 dark:bg-neutral-800 shadow-md">
      <div className="max-w-3xl m-auto px-4 my-4 flex flex-row justify-between text-slate-600 dark:text-slate-300">
        <div className="space-x-4 flex flex-row items-center">
          <Link href="/">
            <a className="hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer transition-all">
              Home
            </a>
          </Link>
          <Link href="#About">
            <a className="hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer transition-all">
              Sobre
            </a>
          </Link>
          <Link href="#Skills">
            <a className="hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer transition-all">
              Skills
            </a>
          </Link>
          <Link href="#Contact">
            <a className="hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer transition-all">
              Contato
            </a>
          </Link>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// 'dark:bg-slate-800 dark:text-slate-50'
