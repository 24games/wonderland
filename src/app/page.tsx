"use client";

export default function Home() {
  // Array de imagens do carrossel
  const winImages = [
    "/assets/prints/print1certo.webp",
    "/assets/prints/print2.webp",
  ];

  const whatsappLink = "https://chat.whatsapp.com/JaP7XOHnvB01IqjB4XsK6y";

  // Ícone SVG do WhatsApp
  const WhatsAppIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <main className="w-full">
      {/* DOBRA 1: HERO SECTION - Tela Cheia */}
      <section className="relative h-[100dvh] w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="/assets/hero-bg.jpg"
          alt="Background Hero"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        {/* Overlay escuro para melhorar contraste do botão */}
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        {/* Gradiente na parte inferior para transição suave */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black z-[1]"></div>

        {/* Botão CTA WhatsApp na transição roxo/preto */}
        <div className="absolute bottom-[185px] left-0 right-0 z-10 flex w-full items-center justify-center px-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full max-w-md min-h-[70px] !py-6 rounded-full bg-[#25D366] px-6 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[#25D366]/50 hover:bg-[#20BA5A] active:scale-95 animate-whatsapp-pulse sm:min-h-[80px] sm:!py-8 sm:text-xl whitespace-nowrap"
          >
            <WhatsAppIcon />
            QUIERO ENTRAR AHORA
          </a>
        </div>
      </section>

      {/* DOBRA 2: PROVA SOCIAL - Carrossel */}
      <section className="min-h-screen w-full bg-gradient-to-b from-[#2a0e45] to-[#000000] pt-16 pb-10">
        {/* Headline */}
        <h2 className="mt-8 mb-16 text-center text-3xl font-bold text-white sm:mt-12 sm:mb-20 md:text-4xl">
          Resultados de los miembros
        </h2>

        {/* Carrossel de Imagens */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {winImages.map((imagePath, index) => (
            <div
              key={index}
              className="relative w-64 aspect-[4/5] flex-shrink-0 snap-center rounded-xl border-2 border-yellow-500/50 shadow-lg shadow-purple-500/20 transition-transform duration-300 active:scale-95 sm:w-80 sm:hover:scale-105"
            >
              <img
                src={imagePath}
                alt={`Ganancia ${index + 1}`}
                className="h-full w-full rounded-xl object-contain"
                onError={(e) => {
                  // Placeholder caso a imagem não exista
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='400'%3E%3Crect fill='%232a0e45' width='320' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='18' fill='%23ffffff' text-anchor='middle' dy='.3em'%3EImagen ${index + 1}%3C/text%3E%3C/svg%3E`;
                }}
              />
              {/* Brilho dourado sutil */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-yellow-500/10 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Botão WhatsApp abaixo do carrossel */}
        <div className="flex justify-center mt-8 px-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full max-w-md min-h-[70px] !py-6 rounded-full bg-[#25D366] px-6 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[#25D366]/50 hover:bg-[#20BA5A] active:scale-95 animate-whatsapp-pulse sm:min-h-[80px] sm:!py-8 sm:text-xl"
          >
            <WhatsAppIcon />
            QUIERO ENTRAR AHORA
          </a>
        </div>

        {/* Instrução para adicionar mais imagens */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Desliza para ver más resultados
        </p>
      </section>
    </main>
  );
}
