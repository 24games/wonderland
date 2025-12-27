"use client";

import { useEffect } from "react";

export default function TutorialPage() {
  useEffect(() => {
    // Script do vídeo vturb
    const script = document.createElement("script");
    script.src =
      "https://scripts.converteai.net/af053167-2542-4323-9c93-d010e7938eb5/players/694c2c46b6c0dcc4672399d4/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove o script quando o componente desmontar
      const existingScript = document.querySelector(
        'script[src*="694c2c46b6c0dcc4672399d4"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background com pontos de iluminação roxa */}
      <div className="absolute inset-0">
        {/* Gradiente base escuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a0a1a] to-black"></div>

        {/* Pontos de iluminação roxa */}
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute right-[15%] top-[40%] h-40 w-40 rounded-full bg-purple-600/15 blur-3xl"></div>
        <div className="absolute left-[20%] bottom-[30%] h-36 w-36 rounded-full bg-purple-500/25 blur-3xl"></div>
        <div className="absolute right-[10%] bottom-[20%] h-28 w-28 rounded-full bg-purple-400/20 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/30 blur-2xl"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 py-8">
        {/* Headline */}
        <h1 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Aprende cómo seguir la entrada del grupo
        </h1>

        {/* Container do Vídeo */}
        <div className="mb-10 w-full max-w-md">
          <div
            dangerouslySetInnerHTML={{
              __html: `<vturb-smartplayer id="vid-694c2c46b6c0dcc4672399d4" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`,
            }}
          />
        </div>

        {/* Botões */}
        <div className="flex w-full max-w-md flex-col gap-6">
          {/* Botão 1: Registrar na casa */}
          <a
            href="https://tinyurl.com/minutoswonderland"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full min-h-[70px] !py-6 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-6 text-center text-lg font-bold text-purple-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50 active:scale-95 animate-pulse sm:min-h-[80px] sm:!py-8 sm:text-xl"
          >
            Registrarse en la casa
          </a>

          {/* Botão 2: Voltar para o grupo */}
          <a
            href="https://chat.whatsapp.com/JaP7XOHnvB01IqjB4XsK6y"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full min-h-[70px] !py-6 rounded-full border-2 border-purple-500/50 bg-purple-900/30 px-6 text-center text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-purple-800/40 hover:scale-105 active:scale-95 sm:min-h-[80px] sm:!py-8 sm:text-xl"
          >
            Volver al grupo
          </a>
        </div>
      </div>
    </main>
  );
}

