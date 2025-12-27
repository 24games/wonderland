"use client";

export default function Home() {
  // Array de imagens do carrossel
  const winImages = [
    "/assets/prints/print1certo.jpeg",
    "/assets/prints/print2.jpg",
  ];

  return (
    <main className="w-full">
      {/* DOBRA 1: HERO SECTION - Tela Cheia */}
      <section className="relative h-[100dvh] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/background%20lp%20wonderland.webp')",
          }}
        >
          {/* Overlay escuro para melhorar contraste do botão */}
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Gradiente na parte inferior para transição suave */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        {/* Botão CTA na transição roxo/preto */}
        <div className="absolute bottom-[270px] left-0 right-0 z-10 flex w-full items-center justify-center px-6">
          <a
            href="https://chat.whatsapp.com/JaP7XOHnvB01IqjB4XsK6y"
            target="_blank"
            rel="noopener noreferrer"
            className="h-auto w-[90%] max-w-md rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-6 py-8 text-center text-xl font-bold text-purple-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50 active:scale-95 animate-pulse sm:px-8 sm:py-8 sm:text-2xl"
          >
            QUIERO ENTRAR AHORA
          </a>
        </div>
      </section>

      {/* DOBRA 2: PROVA SOCIAL - Carrossel */}
      <section className="min-h-screen w-full bg-gradient-to-b from-[#2a0e45] to-[#000000] py-10">
        {/* Headline */}
        <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
          Resultados de los miembros
        </h2>

        {/* Carrossel de Imagens */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {winImages.map((imagePath, index) => (
            <div
              key={index}
              className="relative h-56 w-72 flex-shrink-0 snap-center rounded-xl border-2 border-yellow-500/50 shadow-lg shadow-purple-500/20 transition-transform duration-300 active:scale-95 sm:h-64 sm:w-80 sm:hover:scale-105"
            >
              <img
                src={imagePath}
                alt={`Ganancia ${index + 1}`}
                className="h-full w-full rounded-xl object-cover"
                onError={(e) => {
                  // Placeholder caso a imagem não exista
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='256'%3E%3Crect fill='%232a0e45' width='320' height='256'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23ffffff' text-anchor='middle' dy='.3em'%3EImagen ${index + 1}%3C/text%3E%3C/svg%3E`;
                }}
              />
              {/* Brilho dourado sutil */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-yellow-500/10 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Instrução para adicionar mais imagens */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Desliza para ver más resultados
        </p>
      </section>
    </main>
  );
}
