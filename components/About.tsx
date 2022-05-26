import { NextComponentType } from 'next';

export const About: NextComponentType = () => {
  return (
    <section className="" id="About">
      <h2 className="text-2xl font-bold">Sobre mim</h2>

      <div className="mt-4 space-y-4 font-medium">
        <p>
          Nascido em Curitiba-PR, 22 anos, minimalista, ciclista, apoixonado por
          tecnologia desde a adolescência, movido a café, código, Open Source,
          TDD e algoritmos.
        </p>
        <p>
          Cursei Análise e Desenvolvimento de Sistemas, atualmente busco uma
          primeira oportunidade como Desenvolvedor Backend Junior.
        </p>
      </div>
    </section>
  );
};
