export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            rel="noopener noreferrer"
          >
            <img src="/Logo_R.png" alt="Logo Reborn" width={100} height={24} />
          </a>
        </div>
        <a
          className="flex items-center gap-2"
          href="https://discord.com/oauth2/authorize?client_id=1270181955123544147&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&scope=identify"
        >
          Entrar com Discord{" "}
          <img
            src="/discord-icon.svg"
            alt="Discord Logo"
            width={24}
            height={24}
          />
        </a>
      </div>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-purple-200 after:via-purple-200 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-purple-700 before:opacity-10 after:from-purple-900 after:via-purple-700 after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <img
          className="relative drop-shadow-[0_0_0.3rem_purple]"
          src="/LogoRbn.png"
          alt="Reborn Studios"
          width={180}
          height={37}
        />
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://discord.gg/F2K5CCqcaZ"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Discord{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Junte-se em nosso discord para obter ajuda e explorar nossos
            produtos
          </p>
        </a>
      </div>
    </main>
  );
}
