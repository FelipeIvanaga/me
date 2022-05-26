import { NextComponentType } from 'next';

export const Skills: NextComponentType = () => {
  return (
    <section className="" id="Skills">
      <h2 className="text-2xl font-bold">Skills</h2>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="font-semibold">Backend</h3>
          <ul className="flex flex-row gap-x-4 flex-wrap">
            <li>Node</li>
            <li>Express</li>
            <li>Nestjs</li>
            <li>Postgress</li>
            <li>Mongo</li>
            <li>Prisma</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Frontend</h3>
          <ul className="flex flex-row gap-x-4 flex-wrap">
            <li>React</li>
            <li>Next</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Linguagens & outros</h3>
          <ul className="flex flex-row gap-x-4 flex-wrap">
            <li>Typescript</li>
            <li>Javascript</li>
            <li>TDD</li>
            <li>GIT</li>
            <li>Docker</li>
            <li>Inglês</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
