import { NextPage } from 'next';
import Link from 'next/link';

export const HeroSection: NextPage = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 h-screen shadow-sm">
      <section className="max-w-3xl mx-auto px-4 h-full flex flex-col justify-center gap-y-8">
        <div>
          <h1 className="text-4xl font-semibold">
            Olá, eu sou o Felipe Ivanaga
          </h1>
          <h2 className="text-xl text-indigo-600 font-medium">
            Desenvolvedor backend
          </h2>
        </div>

        <p className="text-lg">
          Criando soluções na internet utilizando Node, React, Next & outros
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Conecte-se comigo</h3>
          <div className="flex flex-row gap-x-4 text-lg flex-wrap">
            <Link href="mailto:felipeivanaga@pm.me">
              <a target="_blank" className="underline decoration-indigo-400">
                E-mail: felipeivanaga@pm.me
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/felipeivanaga/">
              <a target="_blank" className="underline decoration-sky-400">
                Linkedin
              </a>
            </Link>
            <Link href="https://github.com/felipeivanaga">
              <a target="_blank" className="underline decoration-gray-400">
                Github
              </a>
            </Link>
          </div>
          <div className="">
            <Link href="#Contact">
              <a className="px-3 py-2 text-sm font-medium bg-indigo-600 text-gray-50 hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 rounded shadow ring-0 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 dark:ring-offset-black focus:outline-none transition-all cursor-pointer">
                Envie uma mensagem
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
