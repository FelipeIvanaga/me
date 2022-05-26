import type { NextPage } from 'next';
import Head from 'next/head';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { HeroSection } from '../components/HeroSection';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Felipe Ivanaga</title>
      </Head>
      <HeroSection />
      <div className="max-w-3xl m-auto px-4 mt-8">
        <div className="space-y-8">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
