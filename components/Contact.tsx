import { NextComponentType } from 'next';

export const Contact: NextComponentType = () => {
  return (
    <section className="" id="Contact">
      <h1 className="text-2xl font-bold">Envie sua mensagem</h1>

      <div className="mt-4">
        <form
          action="https://formsubmit.co/felipeivanaga@pm.me"
          method="POST"
          className="bg-white dark:bg-neutral-800 shadow-sm py-4 px-4 flex flex-col gap-4 rounded"
        >
          <div className="flex md:flex-row flex-col gap-4">
            <div className="w-full">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 py-1 px-2 text-sm outline-none rounded-sm border-gray-300 bg-neutral-100  dark:bg-neutral-700 dark:border-gray-600 w-full transition-all"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                required
                id="email"
                name="email"
                className="mt-1 py-1 px-2 text-sm outline-none rounded-sm border-gray-300  bg-neutral-100 dark:bg-neutral-700 dark:border-gray-600 w-full transition-all"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="message">Mensagem</label>
            <textarea
              className="mt-1 py-1 px-2 text-sm outline-none rounded-sm border-gray-300  bg-neutral-100 dark:bg-neutral-700 dark:border-gray-600 w-full transition-all"
              id="message"
              name="message"
              rows={5}
              required
            />
            <div className="w-full mt-4">
              <button
                type="submit"
                className="w-full py-2 text-sm font-medium bg-indigo-600 text-gray-50 hover:bg-indigo-700 rounded shadow ring-0 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 dark:ring-offset-black focus:outline-none transition-all"
              >
                Enviar mensagem
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
