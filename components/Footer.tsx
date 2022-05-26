import { NextPage } from 'next';
import Link from 'next/link';

export const Footer: NextPage = () => {
  return (
    <footer className="mt-8 bg-gray-300 dark:bg-neutral-800 shadow">
      <div className="max-w-3xl px-4 py-4 mx-auto text-center">
        <Link href="https://github.com/felipeivanaga/me" target="_blank">
          <a target="_blank">Criado por Felipe Ivanaga, 2022</a>
        </Link>
      </div>
    </footer>
  );
};
