import { NextComponentType } from 'next';

export const Projects: NextComponentType = () => {
  return (
    <section className="">
      <h1 className="text-2xl font-bold">Projetos</h1>

      <div className="mt-4 bg-white dark:bg-neutral-800 shadow-sm rounded divide-y-2 divide-neutral-200 dark:divide-neutral-600">
        <div className="p-4 uppercase">
          <span>em construção...</span>
        </div>
      </div>
    </section>
  );
};
